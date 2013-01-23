/**
 * Created with JetBrains WebStorm.
 * User: kamil
 * Date: 02.12.12
 * Time: 07:45
 * To change this template use File | Settings | File Templates.
 */

// Maszyna wirtualna
// TODO: zrobić VirtualMachine


var _VirtualMachine = function () {

    //var memory = [];

    this.run = function() {
        VM1.execute(new _Compiler(new _Interpreter(new _Preprocessor(new _Lexer()))).compile());
        var Lexer = new _Lexer();
        Lexer.lexing();
        console.log("VM dziala, kod uruchomiony");
        console.log("Kod podzielony na linie: " + Lexer.getCodeLines());
        console.log("Kod powstaly w wyniku analizy leksykalnej: " + Lexer.lexing());
    };

    this.execute = function(codeForExecution){
    };
};


var VM1 = new _VirtualMachine();
VM1.run();