/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:21
 * To change this template use File | Settings | File Templates.
 */
var _Code = function(language, content){ // klasa kodu
    this.codeLanguage= language; // jezyk kodu
    this.content = content.toString(); // tresc kodu jako string

    this.getCodeLanguage = function(){return this.codeLanguage;}; // pobieranie jezyka kodu
    this.setCodeLanguage = function(change){this.codeLanguage = change;}; // zmiana jezyka kodu
    this.getContent = function(){return this.content;}; // pobieranie kodu
    this.setContent = function(change){this.content = change.toString();}; // zmiana kodu

};