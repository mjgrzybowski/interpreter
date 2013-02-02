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

var _Lexer = function (language) {

    this.buildTree = function (code) {

        this.nodes = [[code.getContent(),0,"code"]];
        this.links = [[]];
        var cursor = 1;
        cursorBeforePrevBloc=0;

        var deff = code.getLanguage().getTreeForLexer().getTreeRules();

        var tempArr2 = [],tempArr = [],cursorBeforePrevBloc,cursorBeforeThisBlock,dId,nnId;

        for (dId in deff) {

            cursorBeforeThisBlock = cursor;

            for (nId=cursorBeforePrevBloc;nId<cursorBeforeThisBlock;nId++) {

                tempArr2 = this.nodes[nId][0].split(deff[dId][0]);
                if(tempArr2.length>1)
                {
                    this.nodes[nId][0]=deff[dId][0];
                    this.nodes[nId][2]=deff[dId][1];
                    for (nnId in tempArr2) {
                        this.linkNewNode([tempArr2[nnId],cursor,null], this.nodes[nId]);
                        cursor++;
                    }
                }
                tempArr = tempArr.concat(tempArr2);
            }
            cursorBeforePrevBloc=cursorBeforeThisBlock;

        }

/*
        var output=[];

        this.treeDefTravPre(
            this.preOrder(this.nodes[0]),function(n){
                output.push(n[0],[2]);
            }
        )
*/
        return this.preOrderObj(this.nodes[0]);
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
        this.treeDefTravPost(sb, function (n) {
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

    this.preOrderObj = function (treeNode, parentNode) {
        var nodeId, tempId, tempNode, toReturn = [], childNodes;
        nodeId = this.nodes.indexOf(treeNode);

        childNodes = this.links[nodeId];

        for (tempId in childNodes) {
            if ((tempNode = childNodes[tempId]) != parentNode) {
                toReturn.push(this.preOrderObj(tempNode, treeNode));
            }
        }
        var toR = {};
        toR[treeNode[2]]=treeNode[0];
        toR['of'] = toReturn
        return toR;
    };

    this.treeDefTravPre = function (treeDef, f) {
        if (arguments[2] !== null) {
            f(treeDef[0], arguments[2])
        }
        if (treeDef[1].length > 0) {
            for (nId in treeDef[1]) {
                this.treeDefTravPre(treeDef[1][nId], f, treeDef[0]);
            }
        }
    }

    this.treeDefTravPost = function (treeDef, f) {
        if (treeDef[1].length > 0) {
            for (nId in treeDef[1]) {
                this.treeDefTravPost(treeDef[1][nId], f, treeDef[0]);
            }
        }
        f(treeDef[0], arguments[2])
    }
};