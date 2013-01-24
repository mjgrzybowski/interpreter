/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:32
 * To change this template use File | Settings | File Templates.
 */

// komendy danego jezyka
var _Commands = function() {
    
    // pobieranie listy komend: new _Commands().getPseudoCommands()
    this.getPseudoCommands = function() {
        return PseudoCommands;
    };

    this.getJSCommands = function() {
        return JavaScriptCommands;
    };

    this.getCppCommands = function() {
        return CppCommands;
    };

    this.getJavaCommands = function() {
        return JavaCommands;
    };



    var PseudoCommands = {
        "WW": {
            numberOfPars: 1,
            fnc: function(m, pars) {
                console.log(pars);
            }
        },
        "SS": {
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
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
        "END": {
            numberOfPars: 0,
            fnc: function(m, pars) {
                console.log('koniec' + m + pars);
                flush();
            }
        }
    };

    var JavaScriptCommands = {
        "var": {//var nazwa = [argument];
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
            }
        }
    };

    var CppCommands = {
        "int": {//var nazwa = [argument];
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
            }
        }
    };

    var JavaCommands = {
        "int": {//var nazwa = [argument];
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
            }
        }
    };
};
