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
    var treeJS = [";"," = "];
    var treeCpp = [";"," = "];
    var treeJava = [";"," = "];

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