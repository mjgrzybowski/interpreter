/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 11.12.12
 * Time: 08:03
 * To change this template use File | Settings | File Templates.
 */

// obiekt walidatora kodu
var _AreaValidator = function(){
    this.language = null; // jezyk do walidacji

    this.getLanguage = function() { return this.language; }; // pobieranie jezyka
    this.setLanguage = function( change ) { this.language = change; }; // ustawianie jezyka

    // Funkcja uruchamia sie automatycznie, gdy zmieni sie kod w nameArea
    // funkcja, która na bierzaco sprawdza, czy kod wpisywany jest poprawnie
    this.areaValidate = function( nameArea ){
        this.myNewCode = document.getElementById( nameArea ).value;
        console.log(this.parseNewCode( this.myNewCode, this.language ));

        //console.log("ok");
    };

    this.parseNewCode = function( code, language ) {
        var myNewCode = code;
        var com;
        var lineOfCode;
        var err = 0;

        var i, j, ln = 1;
        myNewCode = myNewCode.split( '\n' );
        for ( lineOfCode in myNewCode ){
            i = lineOfCode;
            if( myNewCode[ i ] === "" )
                err++;
                console.log("Linia " + ln + " zawiera blad: " + Msg.error1[ Msg.langNr ]);

            var arr = myNewCode[ i ].split( ':' );

            if (arr[ 1 ] === undefined )
                console.log("Linia " + ln + " zawiera blad: " + Msg.error2[ Msg.langNr ]);

            if (arr[ 2 ] !== undefined)
                console.log("Linia " + ln + " zawiera blad: " + Msg.error3[ Msg.langNr ]);

            for(com in commands){
                j = com;


            }

            if ( currentCommand === null )
                return String( "Nierozpoznana komenda w linii " + ln );

            ln++;
        }

        if (UI.lineNumbers[ 0 ] < ln)
        UI.extendLineNumbers(ln - UI.lineNumbers[ 0 ]);

        if(err === 0)
            return String("Parse done!");
        else
            return String("Parse done with " + err + "errors!");

    };



};

var CodeAreaValidator = new _AreaValidator();
var ExecutionAreaValidator = new _AreaValidator();







/*

 var lnM1, ln;
 currentCode = currentCode.split( '\n' );
 var i;
 for ( lnM1 in currentCode )
 {

 ln = lnM1 + 1;
 i = lnM1;
 var parsed = ParseLine( currentCode[ i ] );

 console.log( parsed );
 //document.getElementById( "memory-container" ).innerHTML = parsed;

 }

 return currentCode;
 */




function ParseLine( line ) {
    var currentCommand = null;
    var com;
    var currentCommandLabel = null;

    if( line === "" )
        return Msg.error1[ Msg.langNr ];

    var arr = line.split( ':' );

    if (arr[ 1 ] === undefined )
        return Msg.error2[ Msg.langNr ];

    if (arr[ 2 ] !== undefined)
        return String( "W linii jest wiecej niz jeden znak ':'" );
    var i;
    for ( com in commands ) {
        i = com;
        if (com === arr[ 0 ] )
        {
            currentCommand = commands[i];
            currentCommandLabel = com;
        }
    }

    if ( currentCommand === null )
        return String( "Nierozpoznana komenda" );

    var pars =  arr[ 1 ].trim().split( ',' );
    var pL;
    if (arr[ 1 ].trim() === "" )
    {
        pL = 0;
        pars = [];
    }
    else
    {
        pL = pars.length;
    }

    if( pL !== currentCommand.numberOfPars )
        return String("Zla liczba parametrow komendy, " + currentCommandLabel + " przyjmuje " + currentCommand.numberOfPars + "parametrow, otrzymala " + pL);

    if( pL !== 0 )
        var j = 0;
    var p;
    for ( p in pars )
    {
        if(pars[ j ].trim() === "" )
            return String( "Puste miejsce na parametr!" );

        pars[ j ] = pars[ j ].trim();
        j++;
    }
/*
    return {
        command: currentCommand,
        pars: pars
    };
*/

    return String( "ok" );
}