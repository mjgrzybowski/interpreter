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
var _Language = function (name) {
    this.name = name; // nazwa jezyka
    this.operator = null; // tablica operatorow
    this.method = null; // tablica metod
    this.literal = null; // literaly = cyfry, litery, ciagi znakow
    this.treeForLexer = { }; // obiekt odpowiadajacy za budowanie drzewa dla Lexera, oparty na RegEx?

    this.sampleCode = "";

    this.getName = function () {
        return this.name;
    }; // pobieranie nazwy jezyka
    this.getTreeForLexer = function () {
        return this.treeForLexer;
    }; // pobieranie drzewa dla Preprocesora
    this.setTreeForLexer = function (change) {
        this.treeForLexer = change;
    }; // zmiana drzewa dla Preprocesora

};

PseudoCode = new _Language("PseudoCode");

JavaScript = new _Language("JavaScript");

Java = new _Language("Java");

Cpp = new _Language("C++");

var aviableLanguages = [PseudoCode, JavaScript, Java, Cpp];

PseudoCode.setTreeForLexer(new _TreeDefinition(
    {"commands":{
        "WW":{
            numberOfPars:1,
            fnc:function (m, pars) {
                console.log(pars);
            }
        },
        "WZS":{
            numberOfPars:2
        },
        "SZ":{
            numberOfPars:2,
            fnc:function (m, pars) {
                m[ pars[ 1 ] ] = Number(m[ pars[ 0 ] ]);
            }
        },
        "ZWJ":{
            numberOfPars:1,
            fnc:function (m, pars) {
                m[ pars[ 0 ] ]++;
            }
        },
        "ZMJ":{
            numberOfPars:1,
            fnc:function (m, pars) {
                m[ pars[0 ] ]--;
            }
        },
        "IDL":{
            numberOfPars:2,
            fnc:function (m, pars) {
                if (m[ pars[ 0 ] ] !== 0) {
                    lastExecutedLine = pars[ 1 ] - 1;
                }
            }
        },
        "RND":{
            numberOfPars:2,
            fnc:function (a1, a2) {
                if (a1[ a2[ 0 ] ] !== 0) {
                    Math.floor((Math.random() * a1) + a2);
                }
            }
        }
    }
    }
    , [
        ["\n", "newline"],
        [":", "eval"],
        [",", "seperator"]
    ]));


PseudoCode.sampleCode = "SS: a,3\nSS: b,4\nSS: n,0\nSS: m,0\nSS: wynik,0\nSZ: b,m\n\nSZ: a,n\n\nZWJ: wynik\nZMJ: n\n\nIDL: n,9\n\nZMJ: m\n\nIDL:m,7\n\nEND:";