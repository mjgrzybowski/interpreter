/**
 * Created with JetBrains WebStorm.
 * User: kamil
 * Date: 04.12.12
 * Time: 11:45
 * To change this template use File | Settings | File Templates.
 */

var navigatorLanguage = window.navigator.userLanguage || window.navigator.language;
//works IE/SAFARI/CHROME/FF

function Msg() {
    this.langNumber = 0 ; // default for Polish
    if ( navigatorLanguage === "en" )  //for English
        langNumber = 1 ;
    else if ( navigatorLanguage === "en-US" )  //fur English US
        langNumber = 1 ;
    else if ( navigatorLanguage === "de" )  //fur Deutch
        langNumber = 2 ;
    else if ( navigatorLanguage === "es" )  //for Spanish
        langNumber = 3 ;
    else if ( navigatorLanguage === "fr" )  //for French
        langNumber = 4 ;
    else if ( navigatorLanguage === "pl" )  //for Polish
        langNumber = 0 ;
alert(navigatorLanguage);
    alert(langNumber);

    this.applicationName = [ 'FETE: od podstaw do eksperta', 'FETE: from elementary to expert', 'FETE: from elementary to expert','FETE: from elementary to expert','FETE: from elementary to expert' ];
    this.error1 = [ 'Pusto', 'Blank','Blank','Blank','Blank'];
    this.error2 = [ "W linii nie ma znaku ':'", "There is no ':' in line", "There is no ':' in line", "There is no ':' in line", "There is no ':' in line" ];
    this.zrobKrok = [ 'Zrób krok', 'Make step', 'Make step', 'Make step', 'Make step' ];
    this.odNowa = [ 'Zacznij od nowa', 'Clear & again', 'Clear & again', 'Clear & again', 'Clear & again' ];
    this.przetlumacz = [ 'Przetłumacz', 'Translate', 'Translate', 'Translate', 'Translate' ];
    this.uruchom = [ 'Uruchom', 'Run', 'Start', 'Run', 'Run' ];
}

function onLoadLocale(){
    var msg = new Msg();
    alert(msg.applicationName[msg.langNumber]);
    // title
    document.getElementById("title").innerHTML=msg.applicationName[msg.langNumber];
    // buttons
    document.getElementById("step").innerHTML=msg.zrobKrok[msg.langNumber];
    document.getElementById("flush").innerHTML=msg.odNowa[msg.langNumber];
    document.getElementById("translate").innerHTML=msg.przetlumacz[msg.langNumber];
    document.getElementById("run").innerHTML=msg.uruchom[msg.langNumber];
}
