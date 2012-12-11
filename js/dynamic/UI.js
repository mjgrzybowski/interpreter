/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 11.12.12
 * Time: 10:02
 * To change this template use File | Settings | File Templates.
 */

var currentCode = $( '#codeArea' ).val();

function _UI(){

    this.memory = [];
    this.lastExecutedLine = 0;
    this.codeLanguage = null;
    this.executionLanguage = null;
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
        //document.getElementById( "lineNumbers" ).innerHTML = this.lineNumbers[ 1 ];


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

    this.makeStep = function() {
        this.lastExecutedLine++;
        console.log( this.lastExecutedLine );
        this.placeMarker( this.lastExecutedLine );
        //this.executeLine( this.lastExecutedLine );

    };
/*
    this.executeLine = function( n ) {
        var currentCode = $( '#codeArea' ).val();
        //var lnM1, ln;
        currentCode = currentCode.split( '\n' );

        var bold = ParseLine( currentCode[ n-1 ] );
        if( typeof( bold ) != "string" )
        {
            exec( bold, memory );
            console.log( memory );
        }
        else
        {
            if( bold != "blank" )
                alert( 'blad w linii nr: ' + bold );
        }

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

        $( '#codeArea' ).val(currentCode.join( '\n' ));
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
    };

}

var UI = new _UI();
UI.start();
CodeAreaValidator.setLanguage(UI.getCodeLanguage());

document.getElementById( "lineNumbers" ).innerHTML = UI.lineNumbers[ 1 ];

$('#step').click( UI.makeStep );
$('#flush').click( UI.flush );
$('#translate').click( UI.translate );
$('#run').click( UI.run );



/*
function exec( what, mem ) {

    what.command.fnc( mem, what.pars );

}



function run() {



}

*/