/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:22
 * To change this template use File | Settings | File Templates.
 */


/**
 * @param lexer
 */
// obiekt, ktory pobiera informacje z lexera i przekazuje do interpretera
var _Preprocessor = function(lexer) {

    var Lexer = new _Lexer();
    var codeLines = Lexer.getCodeLines();
    var codePreprocessed = [[[]]];

    // new _Preprocessor().preprocessingPseudo()
    this.preprocessingPseudo = function() {
        for (var n = 0; n < codeLines.length; n++) {
            if (Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreePseudo()).length === 1) {
                codePreprocessed[n] = [n, ["function"], Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreePseudo())];
            }
            else if (Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreePseudo()).length === 2) {
                codePreprocessed[n] = [n, ["function", "argument"], Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreePseudo())];
            }
            else if (Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreePseudo()).length === 3) {
                codePreprocessed[n] = [n, ["function", "name", "argument"], Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreePseudo())];
            }
        }
        return codePreprocessed;
    };

    // new _Preprocessor().preprocessingJS()
    this.preprocessingJS = function() {
        for (var n = 0; n < codeLines.length; n++) {
            if (Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreeJS())[0] !== "") {
                if (Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreeJS())[0].substring(0, 3) === "var") {
                    codePreprocessed[n] = [n, ["variable"], Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreeJS())];
                } else
                {
                    codePreprocessed[n] = [n, [0], Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreeJS())];
                }
            }
//            else if (Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreeJS()).length === 2) {
//                codePreprocessed[n] = [n, ["function", "argument"], Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreeJS())];
//            }
//            else if (Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreeJS()).length === 3) {
//                codePreprocessed[n] = [n, ["function", "name", "argument"], Lexer.splitStringToArrayWithTree(codeLines[n], new _TreeDefinition().getTreeJS())];
//            }
        }
        return codePreprocessed;
    };

    this.preprocessingCpp = function() {
        return codePreprocessed;
    };

    this.preprocessingJava = function() {
        return codePreprocessed;
    };

    this.getTreeForPreprocessor = function() {
        return this.treeForPreprocessor;
    };
    this.setTreeForPreprocessor = function(pTree) {
        this.treeForPreprocessor = pTree;
    };
    this.getPreprocessorLanguage = function() {
        return this.preprocessorLanguage;
    };
    this.setPreprocessorLanguage = function(pLanguage) {
        this.treeForPreprocessor = pLanguage;
    };
};
