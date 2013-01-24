/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 28.11.12
 * Time: 08:01
 * To change this template use File | Settings | File Templates.
 */


var _Methods = function() { // klasa Method dla obiektow jezykow obiektowych (JS, Cpp, Java)


    // pobieranie listy metod: new _Methods().getPseudoMethods()
    this.getPseudoMethods = function() {
        return PseudoMethods;
    };
    // pobieranie listy metod: new _Methods().getJSMethods()
    this.getJSMethods = function() {
        return JavaScriptMethods;
    };
    // pobieranie listy metod: new _Methods().getCppMethods()
    this.getCppMethods = function() {
        return CppMethods;
    };
    // pobieranie listy metod: new _Methods().getJavaMethods()
    this.getJavaMethods = function() {
        return JavaMethods;
    };



    var PseudoMethods = {
        "WW": {
            numberOfPars: 1,
            fnc: function(m, pars) {
                console.log(pars);
            }
        },
        "WZS": {
            numberOfPars: 2
        },
        "SZ": {
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 1 ] ] = Number(m[ pars[ 0 ] ]);
            }
        },
        "ZWJ": {
            numberOfPars: 1,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ]++;
            }
        },
        "ZMJ": {
            numberOfPars: 1,
            fnc: function(m, pars) {
                m[ pars[0 ] ]--;
            }
        },
        "IDL": {
            numberOfPars: 2,
            fnc: function(m, pars) {
                if (m[ pars[ 0 ] ] !== 0)
                {
                    lastExecutedLine = pars[ 1 ] - 1;
                }
            }
        },
        "RND": {
            numberOfPars: 2,
            fnc: function(a1, a2) {
                if (a1[ a2[ 0 ] ] !== 0)
                {
                    Math.floor((Math.random() * a1) + a2);
                }
            }
        }
    };

    var JavaScriptMethods = {
        "console.log": {
            numberOfPars: 1,
            fnc: function(m) {
                console.log(m);
                //m[ pars[ 1 ] ] = Number(m[ pars[ 0 ] ]);
            }
        },
        "return": {
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 1 ] ] = Number(m[ pars[ 0 ] ]);
            }
        },
        "Math.random": {//Math.floor((Math.random()*argument1)+argument2); (argument2,argument1)
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
            }
        }
    };

    var CppMethods = {
        "printf": {
            numberOfPars: 1,
            fnc: function(m) {
                console.log(m);
                //m[ pars[ 1 ] ] = Number(m[ pars[ 0 ] ]);
            }
        },
        "return": {
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 1 ] ] = Number(m[ pars[ 0 ] ]);
            }
        },
        "rand": {//rand() % argument1 + argument2; (argument2,argument1)
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
            }
        }
    };

    var JavaMethods = {
        "System.out.print": {
            numberOfPars: 1,
            fnc: function(m) {
                console.log(m);
                //m[ pars[ 1 ] ] = Number(m[ pars[ 0 ] ]);
            }
        },
        "return": {
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 1 ] ] = Number(m[ pars[ 0 ] ]);
            }
        },
        "Random.nextInt": {//Random().nextInt(argument)  (0,n-1)
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
            }
        }
    };
};