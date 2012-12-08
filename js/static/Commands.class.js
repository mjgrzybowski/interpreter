/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:32
 * To change this template use File | Settings | File Templates.
 */
var _Commands = function() {
    this.listOfCommands = null; // lista komend jezyka (object of Language)

    this.getListOfCommands = function() { return this.listOfCommands }; // pobieranie listy komend
    this.setListOfCommands = function(change) { this.listOfCommands = change };
};

