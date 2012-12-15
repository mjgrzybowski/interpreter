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
 * @param tree
 */

var _Lexer = function (language, tree) {
    this.lexerLanguage = language; // jezyk dla Lexera
    this.lexerTree = {}; // drzewo, na podstawie ktorego Lexer zadziala, zaleznie od jezyka

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
    };


    this.init = function (treeDef) {

        this.nodes = treeDef[0];
        this.links = [
            []
        ];

        console.log(treeDef);
        this.links = [
            []
        ];
        this.nodes = [];

        if (treeDef.length == 1) {
            this.nodes = treeDef;
        }
        else {
            this.nodes = [treeDef[0]];
            that = this;
            this.treeDefTravPre(treeDef, function (n, p) {
                that.linkNewNode(n, p)
            }, null);
        }

        this.buildTree();
    }

    this.buildTree = function () {
        var deff = ['\n', ':', ','];
        var tempArr = [];
        var i = 0, j = 1;
        var k = 1000;//ograniczenie na czas eksperymentow, anty zapetlenie
        oldNodes = [this.nodes[0]];
        for (dId in deff) {
            initialNodesLForThisSymbol = this.nodes.length;

            tempArr = [];
            tempArr2 = [];
            for (nId in oldNodes) {

                tempArr2 = oldNodes[nId].split(deff[dId]);
                for (nnId in tempArr2) {
                    this.linkNewNode(tempArr2[nnId], oldNodes[nId]);
                }

                tempArr = tempArr.concat(tempArr2);
            }
            oldNodes = tempArr;



        }
        console.log(this.nodes);
    };

    this.linkNewNode = function (newNode, treeNode) {
        var nId;
        if (this.nodes.indexOf(newNode) == -1 && (nId = this.nodes.indexOf(treeNode)) != -1) {
            this.nodes.push(newNode);
            this.links[nId].push(newNode);
            this.links.push([treeNode]);
        }
        else {
            console.log('bad args', newNode, treeNode);
        }
    };

    this.getLeafs = function (treeNode, parentNode) {
        var toReturn = [], ls;
        for (ls in this.links) {
            if (this.links[ls].length == 1)
                toReturn.push(this.nodes[ls]);
        }
        return toReturn;
    };
    this.getNotLeafs = function (treeNode, parentNode) {
        var toReturn = [], ls;
        for (ls in this.links) {
            if (this.links[ls].length != 1)
                toReturn.push(this.nodes[ls]);
        }
        return toReturn;
    };
    this.getLeafsAndNotLeafs = function (treeNode, parentNode) {
        var toReturn = {};
        toReturn.leafs = [];
        toReturn.notLeafs = [];
        for (ls in this.links) {
            if (this.links[ls].length == 1) {
                toReturn.leafs.push(this.nodes[ls])
            }
            else {
                toReturn.notLeafs.push(this.nodes[ls])
            }
        }
        return toReturn;
    };

    this.removeLeafNode = function (treeNode) {
        var nId
        if ((nId = this.nodes.indexOf(treeNode)) != -1 && (this.links[nId].length == 1)) {
            var temp, tempL, tempId;
            for (nn in this.links[nId]) {
                if (this.links[nId][nn] != undefined) {
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
    this.deatachNode = function (treeNode) {
        var nId
        if ((nId = this.nodes.indexOf(treeNode)) != -1) {
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
    }
    this.deatachSubTree = function (treeNodeA, treeNodeB) {
        var sb = this.getSubTree(treeNodeB, treeNodeA);
        that = this;
        treeDefTravPost(sb, function (n) {
            that.removeLeafNode(n);
        });

        return new Tree(sb);
    };
    this.getSubTree = function (treeNodeA, treeNodeB) {
        return this.preOrder(treeNodeA, treeNodeB);
    };

    this.preOrder = function (treeNode, parentNode) {
        var nodeId, tempId, tempNode, toReturn = [], childNodes;
        nodeId = this.nodes.indexOf(treeNode);

        childNodes = this.links[nodeId];

        for (tempId in childNodes) {
            if ((tempNode = childNodes[tempId]) != parentNode) {
                toReturn.push(this.preOrder(tempNode, treeNode));
            }
        }
        return [treeNode, toReturn];
    };

    this.levelOrder = function () {

    };


    this.treeDefTravPre = function (treeDef, f) {
        if (arguments[2] !== null) {
            f(treeDef[0], arguments[2])
        }
        if (treeDef[1].length > 0) {
            for (nId in treeDef[1]) {
                treeDefTravPre(treeDef[1][nId], f, treeDef[0]);
            }
        }
    }

    this.treeDefTravPost = function (treeDef, f) {
        if (treeDef[1].length > 0) {
            for (nId in treeDef[1]) {
                treeDefTravPost(treeDef[1][nId], f, treeDef[0]);
            }
        }
        f(treeDef[0], arguments[2])
    }
    this.init([document.getElementById("codeArea").value]);
};