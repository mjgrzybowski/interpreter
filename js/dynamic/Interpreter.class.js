/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 20:31
 * To change this template use File | Settings | File Templates.
 */


// INTERPRETER : http://pl.wikipedia.org/wiki/Interpreter_(program_komputerowy)
// program komputerowy, który analizuje kod źródłowy programu, a przeanalizowane fragmenty wykonuje.
// 
//TODO: implementacja interpretowania

var _Interpreter = function() {


    // new _Interpreter().interpreting()
    this.interpreting = function() {
        if (UI.getCodeLanguage() === "pseudo") {
            return this.interpretingPseudo();
        }
        if (UI.getCodeLanguage() === "javascript") {
            return this.interpretingJS();
        }
        if (UI.getCodeLanguage() === "cpp") {
            return this.interpretingCpp();
        }
        if (UI.getCodeLanguage() === "java") {
            return this.interpretingJava();
        }
    };

    this.interpretingPseudo = function() {
        var PseudoPreprocessor = new _Preprocessor();
        var commands = new _Commands().getPseudoCommands();
        var codePreprocessed = PseudoPreprocessor.preprocessingPseudo();

        console.log(codePreprocessed);
    };

    this.interpretingJS = function() {
        var JSPreprocessor = new _Preprocessor();
        var commands = new _Commands().getJSCommands();
        var codePreprocessed = JSPreprocessor.preprocessingJS();
        console.log(codePreprocessed);
    };

    this.interpretingCpp = function() {
        var CppPreprocessor = new _Preprocessor();
        var commands = new _Commands().getCppCommands();
        var codePreprocessed = CppPreprocessor.preprocessingCpp();
        console.log(codePreprocessed);
    };

    this.interpretingJava = function() {
        var JavaPreprocessor = new _Preprocessor();
        var commands = new _Commands().getJavaCommands();
        var codePreprocessed = JavaPreprocessor.preprocessingJava();
        console.log(codePreprocessed);
    };

    this.noname1run = function() {
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


    this.executeLine = function(n) {
        var currentCode = document.getElementById('codeArea').value;
        //var lnM1, ln;
        currentCode = currentCode.split('\n');

        var willDo = ParseLine(currentCode[ n - 1 ]);
        if (typeof(willDo) != "string")
        {
            exec(willDo, memory);
            console.log(memory);
        }
        else
        {
            if (willDo != "blank")
                alert('blad w linii nr: ' + willDo);
        }

    };

    this.exec2 = function(what, mem) {

        what.command.fnc(mem, what.pars);

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


};
