/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:22
 * To change this template use File | Settings | File Templates.
 */

/**
* @param name
*/
var _Language = function( name ){
    this.name = name; // nazwa jezyka
    this.operator = null; // tablica operatorow
    this.method = null; // tablica metod
    this.literal = null; // literaly = cyfry, litery, ciagi znakow
    this.treeForLexer = { }; // obiekt odpowiadajacy za budowanie drzewa dla Lexera, oparty na RegEx?

    this.getName = function() { return this.name; }; // pobieranie nazwy jezyka
    this.getTreeForLexer = function() { return this.treeForLexer; }; // pobieranie drzewa dla Preprocesora
    this.setTreeForLexer = function( change ) { this.treeForLexer = change; }; // zmiana drzewa dla Preprocesora

};

PseudoCode = new _Language("PseudoCode");

PseudoCode.setTreeForLexer(new _TreeDefinition([
    ["\n","newline"],
    [":","eval"],
    [",","seperator"]
]));

