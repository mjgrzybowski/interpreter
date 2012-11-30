/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:22
 * To change this template use File | Settings | File Templates.
 */
var _Lexer = function(language,tree){
    this.lexerLanguage = language // jezyk dla Lexera
    this.lexerTree = {}; // drzewo, na podstawie ktorego Lexer zadziala, zaleznie od jezyka

    this.setLexerTreeAndLanguage = function(tree,language) // zmiana drzewa i jezyka
        {this.lexerTree = tree; this.lexerLanguage = language};
    this.getLexerTree = function(){return this.lexerTree;};
    this.getLexerLanguage = function(){return this.lexerLanguage;};
};