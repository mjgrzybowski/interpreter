/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:21
 * To change this template use File | Settings | File Templates.
 */

// obiekt tej klasy zwiera treść (kod) wpisany przez użytkownika na stronie aplikacji
// kod jest okreslany przez jego jezyk
var _Code = function(content,language) { // klasa kodu
    this.language = language; // jezyk kodu
    this.content = content; // tresc kodu jako string

    this.getLanguage = function() { return this.language; }; // pobieranie jezyka kodu
    this.setLanguage = function( change ){this.language = change; }; // zmiana jezyka kodu
    this.getContent = function() { return this.content ; } ; // pobieranie kodu
    this.setContent = function( change ) { this.content = change.toString(); }; // zmiana kodu
};


var CodeInput = new _Code();