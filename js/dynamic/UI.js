/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 11.12.12
 * Time: 10:02
 * To change this template use File | Settings | File Templates.
 */

var _UI = function() {

    //code examples
    var sampleCode = [];
    
    sampleCode[0] = "SS: a,3\nSS: b,4\nZWJ: a\nZMJ: b\nEND:";
    sampleCode[1] = "var a = 1;\nvar b = 2;\nvar wynik;\nwynik = a + b;";
    sampleCode[2] = "int a = 1;\nint b = 2;\nint wynik;\nwynik = a + b;";
    sampleCode[3] = "int a = 1;\nint b = 2;\nint wynik;\nwynik = a + b;";
    
    sampleCode[4] = "SS: a,3\nSS: b,4\nSS: n,0\nSS: m,0\nSS: wynik,0\nSZ: b,m\n\nSZ: a,n\n\nZWJ: wynik\nZMJ: n\n\nIDL: n,9\n\nZMJ: m\n\nIDL:m,7\n\nEND:";
    sampleCode[5] = "WW: witaj swiecie\nSS: a,3\nSS: b,4\nZWJ: a\nZMJ: b\nEND:";
    sampleCode[6] = "SS: a,3\nEND:";
    var codeAreaCODE = "";
    var lastExecutedLine = 0;
    var codeLanguage = "pseudo";
    var executionLanguage = "javascript";
    
    var lineNumbers = {0: 6, 1: "1"};

    this.getCodeLanguage = function() {
        return codeLanguage;
    };

    this.getCodeAreaCODE = function() {
        return codeAreaCODE;
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

    /*
     
     executeLine = function( n ) {
     var currentCode = document.getElementById( 'codeArea' ).value;
     //var lnM1, ln;
     currentCode = currentCode.split( '\n' );
     
     var willDo = ParseLine( currentCode[ n-1 ] );
     if( typeof( willDo ) != "string" )
     {
     exec( willDo, memory );
     console.log( memory );
     }
     else
     {
     if( willDo != "blank" )
     alert( 'blad w linii nr: ' + willDo );
     }
     
     };
     
     exec = function( what, mem ){
     
     what.command.fnc( mem, what.pars );
     
     };
     */

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

    this.chooseCodeLanguage = function(languageName) {
        Parser.setLanguage(languageName);
        codeLanguage = languageName;
        console.log("Code language set up to: " + languageName);
    };

    this.chooseExecutionLanguage = function(languageName) {
        executionLanguage = languageName;
        console.log("Execution code language set up to: " + languageName);
    };

    this.run = function() {
        var string;
        var execution = document.getElementById("execArea");
        execution.value = "";
        var d = new Date().getTime();
        try {
            with (Math) {
                string = UI.exec(eval(document.getElementById("codeArea").value));
            }
        } catch (e) {
            string = e.name + " at line " + (e.lineNumber - 56) + ": " + e.message;
        }
        var czas = document.getElementById("timing");
        czas.innerHTML = "Czas: " + (new Date().getTime() - d) / 1000 + " s";
        if (string !== undefined) {
            execution.value += string;
        }
    };

    this.exec = function(a) {
        var str = "[";
        if (typeof(a) === "object" && a.length) {
            for (var i = 0; i < a.length; i++)
                if (typeof(a[ i ]) === "object" && a[ i ].length) {
                    str += (i === 0 ? "" : " ") + "[";
                    for (var j = 0; j < a[ i ].length; j++)
                        str += a[ i ][ j ] + (j === a[ i ].length - 1 ?
                                "]" + (i === a.length - 1 ? "]" : ",") + "\n" : ", ");
                } else
                    str += a[ i ] + (i === a.length - 1 ? "]" : ", ");
        } else
            str = a;
        return str;
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

    this.loadCode = function(i) {
        codeAreaCODE = sampleCode[i];
        document.getElementById("codeArea").value = codeAreaCODE;
    };

    this.start = function() {
        this.drawLineNumbers();
        for (var i = 0; i < 4; i++) {
            if (Generator.getHTML().sub.optionChooseCodeAreaLanguage[i].selected === true) {
                this.chooseCodeLanguage(Generator.getHTML().sub.optionChooseCodeAreaLanguage[i].textContent);
                addListener(document, "DOMContentLoaded", UI.loadCode(i));
            }
        }
        for (var i = 0; i < 4; i++) {
            if (Generator.getHTML().sub.optionChooseExecutionAreaLanguage[i].selected === true) {
                this.chooseExecutionLanguage(Generator.getHTML().sub.optionChooseExecutionAreaLanguage[i].textContent);
            }
        }
        $('#step').click(this.makeStep);
        $('#flush').click(this.flush);
        $('#translate').click(this.translate);
        $('#run').click(this.run);
    };
};

var UI = new _UI();
UI.start();
Parser.setLanguage(UI.getCodeLanguage());
addListener(document, "DOMContentLoaded", UI.cleanCode());
alert("This is sample code, just put Yours into left textarea and change language type.");
