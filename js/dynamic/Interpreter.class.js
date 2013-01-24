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



    this.interpretingPseudo = function() {
        var PseudoPreprocessor = new _Preprocessor();
        var codePreprocessed = PseudoPreprocessor.preprocessingPseudo();
        
    };
    this.interpretingJS = function() {
        var JSPreprocessor = new _Preprocessor();
        var codePreprocessed = JSPreprocessor.preprocessingJS();
        
    };
    this.interpretingCpp = function() {
        var CppPreprocessor = new _Preprocessor();
        var codePreprocessed = CppPreprocessor.preprocessingCpp();
        
    };
    this.interpretingJava = function() {
        var JavaPreprocessor = new _Preprocessor();
        var codePreprocessed = JavaPreprocessor.preprocessingJava();
        
    };

};
