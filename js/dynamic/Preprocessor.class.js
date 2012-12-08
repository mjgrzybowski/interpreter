/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:22
 * To change this template use File | Settings | File Templates.
 */

// obiekt, ktory pobiera informacje z lexera i przekazuje do interpretera
var _Preprocessor = function( lexer ) {
    try{
        if ( lexer.getLexerTree() )
            this.treeForPreprocessor = lexer.getLexerTree();
        else
            this.treeForPreprocessor = null;
        if ( lexer.getLexerLanguage() )
            this.preprocessorLanguage = lexer.getLexerLanguage();
        else
            this.preprocessorLanguage = null;
    }
    catch( ex ) {
        var err = "There was an error on this page.\n\n";
        err += "Error description: " + ex.message + "\n\n";
        err += "Click OK to continue.\n\n";
        alert( err );
    }
    this.getTreeForPreprocessor = function() {return this.treeForPreprocessor; };
    this.setTreeForPreprocessor = function( pTree ) { this.treeForPreprocessor = pTree; };
    this.getPreprocessorLanguage = function() { return this.preprocessorLanguage; };
    this.setPreprocessorLanguage = function( pLanguage ) { this.treeForPreprocessor = pLanguage; };
};