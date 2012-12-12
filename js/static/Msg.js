/**
 * Created with JetBrains WebStorm.
 * User: kamil
 * Date: 04.12.12
 * Time: 11:45
 * To change this template use File | Settings | File Templates.
 */

var navigatorLanguage = window.navigator.userLanguage || window.navigator.language;
//works IE/SAFARI/CHROME/FF

var _Msg = function() {
    this.langNr = 0 ; // default for Polish
    if ( navigatorLanguage === "en" )  //for English
        this.langNr = 1 ;
    else if ( navigatorLanguage === "en-US" )  //for English US
        this.langNr = 1 ;
    else if ( navigatorLanguage === "de" )  //for German
        this.langNr = 2 ;
    else if ( navigatorLanguage === "es" )  //for Spanish
        this.langNr = 3 ;
    else if ( navigatorLanguage === "fr" )  //for French
        this.langNr = 4 ;
    else if ( navigatorLanguage === "ru" )  //for Russian
        this.langNr = 5 ;
    else if ( navigatorLanguage === "pl" )  //for Polish
        this.langNr = 0 ;

    this.appName = [ 'FETE: od podstaw do eksperta', 'FETE: from elementary to expert', 'FETE: from elementary to expert', 'FETE: from elementary to expert', 'FETE: from elementary to expert', 'FETE: from elementary to expert' ];
    this.error1 = [ 'Pusto', 'Blank', 'Blank', 'Blank', 'Blank', 'Blank' ];
    this.error2 = [ "W linii nie ma znaku ':'", "There is no ':' in line", "There is no ':' in line", "There is no ':' in line", "There is no ':' in line", "There is no ':' in line" ];
    this.error3 = [ "W linii jest wiecej niz jeden znak ':'", "There is more than one ':' character", "There is more than one ':' character", "There is more than one ':' character", "There is more than one ':' character", "There is more than one ':' character" ];
    this.zrobKrok = [ 'Zrób krok', 'Make one step', 'Mache eine Schritt', 'Faire un étape', 'Haga paso', 'Шаг' ];
    this.odNowa = [ 'Zacznij od nowa', 'Clear & again', 'Clear & again', 'Clear & again', 'Clear & again', 'Clear & again' ];
    this.przetlumacz = [ 'Przetłumacz kod', 'Translate code', 'Translate code', 'Translate code', 'Translate code', 'Translate code' ];
    this.uruchom = [ 'Uruchom', 'Run', 'Start', 'Start', 'Start', 'Start' ];

    this.onLoadLocale = function() {
        Msg.loadLocale( Msg.langNr );
    };

    this.loadLocale = function( nr ){
        // title
        document.getElementById("title").innerHTML = Msg.appName[ nr ];
        // buttons
        document.getElementById("step").innerHTML = Msg.zrobKrok[ nr ];
        document.getElementById("flush").innerHTML = Msg.odNowa[ nr ];
        document.getElementById("translate").innerHTML = Msg.przetlumacz[ nr ];
        document.getElementById("run").innerHTML = Msg.uruchom[ nr ];
    };

};

var Msg = new _Msg();