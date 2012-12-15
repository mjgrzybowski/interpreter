/**
 * Created with JetBrains WebStorm.
 * User: kamil
 * Date: 01.12.12
 * Time: 22:25
 * To change this template use File | Settings | File Templates.
 */

// definicja drzewa to sposób postępowania Leksera, który przygotowuje kod zgodnie z danym językiem

/**
* @param choice
*/

var  _TreeDefinition = function( choice ){

    var language = choice;
    var tree = [];

    this.getLanguage = function() { return language; };
    this.setLanguage = function( languageChoice ) { language = languageChoice; };

    this.getTree = function() { return tree; };
    this.setTree = function( treeToSet ) { tree = treeToSet; };

    if ( choice === "pseudo" )
        tree = pseudoTree;
    else if ( choice === "javascript" )
        tree = javaScriptTree;
    else if ( choice === "cpp" )
        tree = cppTree;
    else if ( choice === "java" )
        tree = javaTree;
    else
        console.log( "ERROR, language for tree unknown!" );

    var pseudoTree = {0: "\n", 1: ":", 2: ","};
    var javaScriptTree = {0: ""};
    var cppTree = {0: ""};
    var javaTree = {0: ""};



};


PseudoTreeDefinition = new _TreeDefinition( "pseudo" );


JavaScriptTreeDefinition = new _TreeDefinition( "javascript" );


CppTreeDefinition = new _TreeDefinition( "cpp" );


JavaTreeDefinition = new _TreeDefinition( "java" );

