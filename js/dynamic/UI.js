/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 11.12.12
 * Time: 10:02
 * To change this template use File | Settings | File Templates.
 */

var _UI = function() {

    //code examples

    var lastExecutedLine = 0;
    
    var lineNumbers = {0: 6, 1: "1"};

    this.Lexer = new _Lexer();

    this.getCodeLanguage = function() {
        return this.codeLanguage;
    };
    
    this.getExecLanguage = function() {
        return this.executionLanguage;
    };

    this.getCodeAreaCODE = function() {
        return new _Code(document.getElementById("codeArea").value,this.getCodeLanguage());
    };

    //this.setCodeLanguage = function( c ){ codeLanguage = c; };
    //this.getExecutionLanguage = function() { return executionLanguage; };
    //this.setExecutionLanguage = function( e ){ executionLanguage = e; };
    this.getLineNumbers = function() {
        return lineNumbers;
    };


    this.drawLineNumbers = function() {
        var lineNumbersBuilder = "";
        for (var i = 1; i <= lineNumbers[ 0 ]; i++)
        {
            lineNumbersBuilder += i + '<br />\n';
            //$( '.linesNumbers' ).append( i + '<br />' );
        }

        lineNumbers[ 1 ] = lineNumbersBuilder;
        document.getElementById('lineNumbers').innerHTML = lineNumbers[ 1 ];
    };

    this.extendLineNumbers = function(n) {
        lineNumbers[ 0 ] += n;
        this.drawLineNumbers();
    };

    this.placeMarker = function(nol) {
        $('#execMarker').animate({
            'top': 3 + 16 * (nol - 1)
        }, 200);
    };
    // TODO code execution with memory association
    this.makeStep = function() {
        lastExecutedLine++;
        console.log(lastExecutedLine + " line done.");
        UI.placeMarker(lastExecutedLine);
        //executeLine( lastExecutedLine );
    };

    this.flush = function() {
        memory = [];
        lastExecutedLine = 0;
        console.log('flushed!');
    };

    this.translate = function(language) {
        //lexing( codeInput.getContent() );
        return language;
    };

    this.cleanCode = function() {
        var currentCode = document.getElementById('codeArea').value;
        var lnM1, ln;
        //var newCode;
        currentCode = currentCode.split('\n');
        var k;
        for (lnM1 in currentCode)
        {
            ln = lnM1 + 1;
            k = lnM1;
            currentCode[ k ] = currentCode[ k ].trim();
        }
        document.getElementById('codeArea').value = currentCode.join('\n');
    };

    this.chooseCodeLanguage = function(language) {
        this.codeLanguage = language;
        this.loadSampleCode();
        console.log("Code language set up to: " + language.name);
    };

    this.chooseExecutionLanguage = function(language) {
        executionLanguage = language;
        console.log("Execution code language set up to: " + language.name);
    };

    this.run = function() {
        console.log(UI.Lexer.buildTree(UI.getCodeAreaCODE()));
    };

    this.getTimeNow = function() {
        var timeNow = [];
        if (new Date().getHours() < 10)
            timeNow[ 0 ] = "0" + new Date().getHours();
        else
            timeNow[ 0 ] = new Date().getHours();
        if (new Date().getMinutes() < 10)
            timeNow[ 1 ] = "0" + new Date().getMinutes();
        else
            timeNow[ 1 ] = new Date().getMinutes();
        if (new Date().getSeconds() < 10)
            timeNow[ 2 ] = "0" + new Date().getSeconds();
        else
            timeNow[ 2 ] = new Date().getSeconds();

        return timeNow[ 0 ] + ":" + timeNow[ 1 ] + ":" + timeNow[ 2 ];
    };

    this.loadSampleCode = function() {
        document.getElementById("codeArea").value = this.codeLanguage.sampleCode;
        alert("This is sample code, just put Yours into left textarea and change language type.");
    };

    this.start = function() {
        this.drawLineNumbers();
        addListener(document, "DOMContentLoaded", UI.loadSampleCode());
        $('#step').click(this.makeStep);
        $('#flush').click(this.flush);
        $('#translate').click(this.translate);
        $('#run').click(this.run);
    };
};


Generator.loadLanguages(aviableLanguages);

var UI = new _UI();
UI.codeLanguage = aviableLanguages[0];
UI.executionLanguage = aviableLanguages[0];

UI.start();
UI.cleanCode();




