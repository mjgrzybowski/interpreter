/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 11.12.12
 * Time: 10:02
 * To change this template use File | Settings | File Templates.
 */

var _UI = function(){

    this.memory = [];
    this.lastExecutedLine = 0;
    this.codeLanguage = "primitive";
    this.executionLanguage = "javascript";
    this.lineNumbers = { 0: 31, 1: "1" };

    this.getCodeLanguage = function() { return this.codeLanguage; };
    this.setCodeLanguage = function( c ){ this.codeLanguage = c; };
    this.getExecutionLanguage = function() { return this.executionLanguage; };
    this.setExecutionLanguage = function( e ){ this.executionLanguage = e; };


    this.drawLineNumbers = function(){
        var lineNumbersBuilder = "";
        for( var i = 1; i <= this.lineNumbers[ 0 ]; i++)
        {
            lineNumbersBuilder += i + '<br />\n' ;
            //$( '.linesNumbers' ).append( i + '<br />' );
        }

        this.lineNumbers[ 1 ] = lineNumbersBuilder;
        document.getElementById( "lineNumbers" ).innerHTML = UI.lineNumbers[ 1 ];


    };

    this.extendLineNumbers = function( n ){
        this.lineNumbers[ 0 ] += n;
        this.drawLineNumbers();
    };

    this.placeMarker = function( nol ){
        $( '#execMarker' ).animate( {
            'top': 3 + 16 * ( nol - 1 )
        }, 200 );
    };
    // TODO code execution with memory association
    this.makeStep = function() {
        UI.lastExecutedLine++;
        console.log( UI.lastExecutedLine + " line done.");
        UI.placeMarker( UI.lastExecutedLine );
        //this.executeLine( this.lastExecutedLine );
    };

    /*

    this.executeLine = function( n ) {
        var currentCode = $( '#codeArea' ).val();
        //var lnM1, ln;
        currentCode = currentCode.split( '\n' );

        var willDo = ParseLine( currentCode[ n-1 ] );
        if( typeof( willDo ) != "string" )
        {
            exec( willDo, this.memory );
            console.log( this.memory );
        }
        else
        {
            if( willDo != "blank" )
                alert( 'blad w linii nr: ' + willDo );
        }

    };

    this.exec = function( what, mem ){

        what.command.fnc( mem, what.pars );

    };
    */

    this.flush = function() {
        this.memory = [];
        this.lastExecutedLine = 0;
        console.log( 'flushed!' );
    };

    this.translate = function( language ) {
        //this.language = language;
        //lexing( codeInput.getContent() );

    };

    this.cleanCode = function() {
        var currentCodeStart = $( '#codeArea' ).val();
        var currentCode = currentCodeStart;

        var lnM1, ln;
        //var newCode;
        currentCode = currentCode.split( '\n' );

        for (lnM1 in currentCode )
        {
            ln = lnM1 + 1;
            var k = 0;
            currentCode[ k ] = currentCode[ k ].trim();
            k++;
        }
        currentCodeStart = currentCode.join( '\n' );
    };

    this.chooseCodeLanguage = function( languageName ) {
        CodeAreaValidator.setLanguage(languageName);
        this.codeLanguage = languageName;
    };

    this.chooseExecutionLanguage = function( languageName ) {
        this.executionLanguage = languageName;
    };

    this.run = function(){

    };

    this.start = function(){
        this.drawLineNumbers();
        this.cleanCode();
        this.chooseCodeLanguage("primitive");
        this.chooseExecutionLanguage("javascript");
        $( '#step' ).click( UI.makeStep );
        $( '#flush' ).click( UI.flush );
        $( '#translate' ).click( UI.translate );
        $( '#run' ).click( UI.run );
    };
};

var UI = new _UI();
UI.start();
CodeAreaValidator.setLanguage( UI.getCodeLanguage() );







/*
function exec( what, mem ) {

    what.command.fnc( mem, what.pars );

}



function run() {



}

*/