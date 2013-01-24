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

    // pobieranie listy komend: new _Commands().getJSCommands()
    this.getJSCommands = function() {
        return JavaScriptCommands;
    };

    // pobieranie listy komend: new _Commands().getCppCommands()
    this.getCppCommands = function() {
        return CppCommands;
    };

    // pobieranie listy komend: new _Commands().getJavaCommands()
    this.getJavaCommands = function() {
        return JavaCommands;
    };



    var PseudoCommands = {
        "SS": {
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
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
        },
        "exit": {
            numberOfPars: 0,
            fnc: function(m, pars) {
                console.log('koniec' + m + pars);
                flush();
            }
        }
    };

    var CppCommands = {
        "int": {//var nazwa = [argument];
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
            }
        },
        "exit": {
            numberOfPars: 0,
            fnc: function(m, pars) {
                console.log('koniec' + m + pars);
                flush();
            }
        }
    };

    var JavaCommands = {
        "int": {//var nazwa = [argument];
            numberOfPars: 2,
            fnc: function(m, pars) {
                m[ pars[ 0 ] ] = Number(pars[ 1 ]);
            }
        },
        "exit": {
            numberOfPars: 0,
            fnc: function(m, pars) {
                console.log('koniec' + m + pars);
                flush();
            }
        }
    };
};
