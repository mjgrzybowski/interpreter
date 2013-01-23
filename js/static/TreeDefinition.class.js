/**
 * Created with JetBrains WebStorm.
 * User: kamil
 * Date: 01.12.12
 * Time: 22:25
 * To change this template use File | Settings | File Templates.
 */

// definicja drzewa to sposób postępowania Leksera, który przygotowuje kod 
// zgodnie z danym językiem, zawiera konkretne algorytmy



var _TreeDefinition = function() {

    var treePseudo = ["\n",":",","]; 
    var treeJS = ["{","}","\n"];
    var treeCpp = ["\n",":",","];
    var treeJava = ["\n",":",","];

    this.getTreePseudo = function(){
        return treePseudo;
    };

    this.getTreeJS = function(){
        return treeJS;
    };

    this.getTreeCpp = function(){
        return treeCpp;
    };

    this.getTreeJava = function(){
        return treeJava;
    };

};



//PseudoTreeDefinition = new _TreeDefinition( "pseudo" );
//
//
//JavaScriptTreeDefinition = new _TreeDefinition( "javascript" );
//
//
//CppTreeDefinition = new _TreeDefinition( "cpp" );
//
//
//JavaTreeDefinition = new _TreeDefinition( "java" );

/*
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
 */

//var pseudoTree = {0: "\n", 1: ":", 2: ","};
//var javaScriptTree = {0: ""};
//var cppTree = {0: ""};
//var javaTree = {0: ""};