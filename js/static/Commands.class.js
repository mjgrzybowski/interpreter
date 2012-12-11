/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:32
 * To change this template use File | Settings | File Templates.
 */

// komendy danego jezyka
var _Commands = function() {
    this.listOfCommands = null; // lista komend jezyka (object of Language)

    this.getListOfCommands = function() { return this.listOfCommands }; // pobieranie listy komend
    this.setListOfCommands = function(change) { this.listOfCommands = change };
};

var PrimitiveCommands = new _Commands();
var JavaScriptCommands = new _Commands();
var CppCommands = new _Commands();
var JavaScriptCommands = new _Commands();


PrimitiveCommands.setListOfCommands({
    "SS":{
        numberOfPars: 2,
        fnc:function( m, pars ){
            m[ pars[ 0 ] ] = Number( pars[ 1 ]);
        }
    },
    "WZS":{
        numberOfPars: 2
    },
    "SZ":{
        numberOfPars: 2,
        fnc: function( m, pars ){
            m[ pars[ 1 ] ] = Number( m[ pars[ 0 ] ] );
        }
    },
    "ZWJ":{
        numberOfPars: 1,
        fnc:function( m, pars ){
            m[ pars[ 0 ] ]++;
        }
    },
    "ZMJ":{
        numberOfPars:1,
        fnc:function( m, pars ){
            m[ pars[0 ] ]--;
        }
    },
    "IDL":{
        numberOfPars: 2,
        fnc:function( m, pars ){
            if (m[ pars[ 0 ] ] != 0 )
            {
                lastExecutedLine = pars[ 1 ] - 1;
            }
        }
    },
    "END":{
        numberOfPars: 0,
        fnc:function( m, pars ){
            console.log( 'koniec' + m + pars );
            flush();
        }
    }
});
