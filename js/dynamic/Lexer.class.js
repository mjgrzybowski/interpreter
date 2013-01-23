/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:22
 * To change this template use File | Settings | File Templates.
 */

var _Lexer = function() {

    var code = UI.getCodeAreaCODE();
    var tokens;
    var lines;

    this.getTokens = function() {
        return tokens;
    };

    this.getCodeLines = function() {
        this.lexing();
        return lines;
    };

    this.getLinesFromCode = function(string, separatorsTable) {
        return string.split(separatorsTable[0]);
    };

    // Język pobierany bezpośrednio z UI
    this.lexing = function() {
        if (UI.getCodeLanguage() === "pseudo") {
            this.runLexerForPseudoLanguage();
            lines = this.getLinesFromCode(UI.getCodeAreaCODE(), new _TreeDefinition().getTreePseudo());
        }
        if (UI.getCodeLanguage() === "javascript") {
            this.runLexerForJavascriptLanguage();
            lines = this.getLinesFromCode(UI.getCodeAreaCODE(), new _TreeDefinition().getTreeJS());
        }
        if (UI.getCodeLanguage() === "cpp") {
            this.runLexerForCppLanguage();
            lines = this.getLinesFromCode(UI.getCodeAreaCODE(), new _TreeDefinition().getTreeCpp());
        }
        if (UI.getCodeLanguage() === "java") {
            this.runLexerForJavaLanguage();
            lines = this.getLinesFromCode(UI.getCodeAreaCODE(), new _TreeDefinition().getTreeJava());
        }
        return tokens;
    };

    this.runLexerForPseudoLanguage = function() {
        tokens = this.splitStringToArrayWithTree(UI.getCodeAreaCODE(), new _TreeDefinition().getTreePseudo()); // wynik analizy leksykalnej = tokeny
    };

    this.runLexerForJavascriptLanguage = function() {
        tokens = this.splitStringToArrayWithTree(UI.getCodeAreaCODE(), new _TreeDefinition().getTreeJS()); // wynik analizy leksykalnej = tokeny
    };

    this.runLexerForCppLanguage = function() {
        tokens = this.splitStringToArrayWithTree(UI.getCodeAreaCODE(), new _TreeDefinition().getTreeCpp()); // wynik analizy leksykalnej = tokeny
    };

    this.runLexerForJavaLanguage = function() {
        tokens = this.splitStringToArrayWithTree(UI.getCodeAreaCODE(), new _TreeDefinition().getTreeJava()); // wynik analizy leksykalnej = tokeny
    };

    this.splitStringToArrayWithTree = function(string, separatorsTable) {
        var tempArray = [];
        if (string === "") {
            return tempArray;
        }
        string = this.removeSpaces(string);
        // String remove spaces
        var tempArray = string.split(separatorsTable[0]);
        var subArray = [];
        for (var i = 1; i < separatorsTable.length; i++) {
            for (var n in tempArray) {
                if (tempArray[n] !== "END:")
                    subArray = subArray.concat(tempArray[n].split(separatorsTable[i]));
                else {
                    subArray = subArray.concat("END");
                }
//                console.log(subArray);
//                console.log("========");
            }
            tempArray = subArray;
            subArray = [];
            //}
        }

        return tempArray; // wynik analizy leksykalnej = tokeny
    };

    this.removeWhiteSpaces = function(s) {
        return s.replace(/\s+/g, '');
    };

//new _Lexer().removeSpaces(UI.getCodeAreaCODE());
    this.removeSpaces = function(s) {
        return s.replace(/\u0020+/g, '');
    };
};




/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:22
 * To change this template use File | Settings | File Templates.
 */

// reads code with proper lexerTree and makes an array with order:
// first line > 1. number of a line of code
// 2. function
// 3... argument/'s
// next line...

// klasa tworzaca obiekty Lekser, ktore "rozbieraja kod na czesci"
//TODO: implementacja lexowania

/**
 * @param language
 */

var _Lexer2 = function(language) {
    this.lexerTree = 0;
    this.lexerLanguage = language; // jezyk dla Lexera
    this.lexerTree = language.getTreeForLexer(); // drzewo, na podstawie ktorego Lexer zadziala, zaleznie od jezyka

    this.setLexerTreeAndLanguage = function(tree, language) // zmiana drzewa i jezyka
    {
        this.lexerTree = tree;
        this.lexerLanguage = language;
    };

    this.getLexerTree = function() {
        return this.lexerTree;
    };

    this.getLexerLanguage = function() {
        return this.lexerLanguage;
    };

    this.buildTree = function(code) {

        this.nodes = [[code.getContent(), 0, "code"]];
        this.links = [[]];
        var cursor = 1;
        cursorBeforePrevBloc = 0;
        var deff = this.lexerTree.getTokens();

        var tempArr2 = [], tempArr = [], cursorBeforePrevBloc, cursorBeforeThisBlock, dId, nnId;

        for (dId in deff) {

            cursorBeforeThisBlock = cursor;

            for (nId = cursorBeforePrevBloc; nId < cursorBeforeThisBlock; nId++) {

                tempArr2 = this.nodes[nId][0].split(deff[dId][0]);
                if (tempArr2.length > 1)
                {
                    this.nodes[nId][0] = deff[dId][0];
                    this.nodes[nId][2] = deff[dId][1];
                    for (nnId in tempArr2) {
                        this.linkNewNode([tempArr2[nnId], cursor, null], this.nodes[nId]);
                        cursor++;
                    }
                }
                tempArr = tempArr.concat(tempArr2);
            }
            cursorBeforePrevBloc = cursorBeforeThisBlock;

        }

        var output;

        this.treeDefTravPre(
                this.preOrder(this.nodes[0]), function(n) {
            output.push[n[0], [2]];
        }
        );

        return output;
    };

    this.linkNewNode = function(newNode, treeNode) {
        var nId;
        if (this.nodes.indexOf(newNode) === -1 && (nId = this.nodes.indexOf(treeNode)) !== -1) {
            this.nodes.push(newNode);
            this.links[nId].push(newNode);
            this.links.push([treeNode]);
        }
        else {
            console.log('bad args', newNode, treeNode);
        }
    };

    this.getLeafs = function(treeNode, parentNode) {
        var toReturn = [], ls;
        for (ls in this.links) {
            if (this.links[ls].length === 1)
                toReturn.push(this.nodes[ls]);
        }
        return toReturn;
    };

    this.getNotLeafs = function(treeNode, parentNode) {
        var toReturn = [], ls;
        for (ls in this.links) {
            if (this.links[ls].length !== 1)
                toReturn.push(this.nodes[ls]);
        }
        return toReturn;
    };

    this.getLeafsAndNotLeafs = function(treeNode, parentNode) {
        var toReturn = {};
        toReturn.leafs = [];
        toReturn.notLeafs = [];
        for (ls in this.links) {
            if (this.links[ls].length === 1) {
                toReturn.leafs.push(this.nodes[ls])
            }
            else {
                toReturn.notLeafs.push(this.nodes[ls])
            }
        }
        return toReturn;
    };

    this.removeLeafNode = function(treeNode) {
        var nId
        if ((nId = this.nodes.indexOf(treeNode)) !== -1 && (this.links[nId].length === 1)) {
            var temp, tempL, tempId;
            for (nn in this.links[nId]) {
                if (this.links[nId][nn] !== undefined) {
                    temp = this.nodes.indexOf(this.links[nId][nn]);
                    tempL = this.links[temp];
                    tempId = tempL.indexOf(treeNode);
                    tempL.splice(tempId, 1);
                }
            }
            this.links.splice(nId, 1);
            this.nodes.splice(nId, 1);
        }
        else {
            console.log('bad args: this works only on Leaf Nodes of this tree', treeNode);
        }
    };

    this.deatachNode = function(treeNode) {
        var nId;
        if ((nId = this.nodes.indexOf(treeNode)) !== -1) {
            var temp, tempId, toReturn = [], toKill = [];
            for (tempId in this.links[nId]) {
                temp = this.links[nId][tempId];
                toKill.push(temp);
            }
            for (tempId in toKill) {
                toReturn.push(this.deatachSubTree(treeNode, toKill[tempId]));
            }
            return toReturn;
        }
        else {
            console.log('bad args: this works only on Nodes of this tree');
            return false;
        }
    };

    this.deatachSubTree = function(treeNodeA, treeNodeB) {
        var sb = this.getSubTree(treeNodeB, treeNodeA);
        that = this;
        this.treeDefTravPost(sb, function(n) {
            that.removeLeafNode(n);
        });

        return new Tree(sb);
    };
    this.getSubTree = function(treeNodeA, treeNodeB) {
        return this.preOrder(treeNodeA, treeNodeB);
    };

    this.preOrder = function(treeNode, parentNode) {
        var nodeId, tempId, tempNode, toReturn = [], childNodes;
        nodeId = this.nodes.indexOf(treeNode);

        childNodes = this.links[nodeId];

        for (tempId in childNodes) {
            if ((tempNode = childNodes[tempId]) !== parentNode) {
                toReturn.push(this.preOrder(tempNode, treeNode));
            }
        }
        return [treeNode, toReturn];
    };

    this.treeDefTravPre = function(treeDef, f) {
        if (arguments[2] !== null) {
            f(treeDef[0], arguments[2]);
        }
        if (treeDef[1].length > 0) {
            for (nId in treeDef[1]) {
                this.treeDefTravPre(treeDef[1][nId], f, treeDef[0]);
            }
        }
    };

    this.treeDefTravPost = function(treeDef, f) {
        if (treeDef[1].length > 0) {
            for (nId in treeDef[1]) {
                this.treeDefTravPost(treeDef[1][nId], f, treeDef[0]);
            }
        }
        f(treeDef[0], arguments[2]);
    };
};




/* LEXER => doing lexing
 * http://en.wikipedia.org/wiki/Lexical_analysis
 * 
 * Lexical analysis is the process of converting a sequence of characters into 
 * a sequence of tokens. A program or function which performs lexical analysis 
 * is called a lexical analyzer, lexer, or scanner. A lexer often exists as a 
 * single function which is called by a parser or another function.
 * 
 * TOKENS
 * A token is a string of characters, categorized according to the rules as a symbol 
 * (e.g., IDENTIFIER, NUMBER, COMMA). The process of forming tokens from an input 
 * stream of characters is called tokenization, and the lexer categorizes them 
 * according to a symbol type. A token can look like anything that is useful for 
 * processing an input text stream or text file.
 *
 * A lexical analyzer generally does nothing with combinations of tokens, a task 
 * left for a parser. For example, a typical lexical analyzer recognizes parentheses 
 * as tokens, but does nothing to ensure that each "(" is matched with a ")".
 *
 **/

// reads code with proper lexerTree and makes an array with order:
// first line > 1. number of a line of code
// 2. function
// 3... argument/'s
// next line...

// klasa tworzaca obiekty Lekser, ktore "rozbieraja kod na czesci"
//TODO: implementacja lexowania



//var sampleCode3 = "SS: a,3\nSS: b,4\nZWJ: a\nZMJ: b\nEND:";



/* this.lexerLanguage = language; // jezyk dla Lexera
 this.lexerTree = language.getTreeForLexer(); // drzewo, na podstawie ktorego Lexer zadziala, zaleznie od jezyka
 
 this.setLexerTreeAndLanguage = function (tree, language) // zmiana drzewa i jezyka
 {
 this.lexerTree = tree;
 this.lexerLanguage = language;
 };
 
 this.getLexerTree = function () {
 return this.lexerTree;
 };
 
 this.getLexerLanguage = function () {
 return this.lexerLanguage;
 };*/