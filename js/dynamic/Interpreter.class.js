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

};
