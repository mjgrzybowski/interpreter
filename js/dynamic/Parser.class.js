/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 11.12.12
 * Time: 08:03
 * To change this template use File | Settings | File Templates.
 */

// obiekt walidatora kodu
var _Parser = function(){
    var language = null; // jezyk do walidacji

    //this.getLanguage = function() { return this.language; }; // pobieranie jezyka
    this.setLanguage = function( change ) { language = change; }; // ustawianie jezyka

    // Funkcja uruchamia sie automatycznie, gdy zmieni sie kod w nameArea
    // funkcja, która na bierzaco sprawdza, czy kod wpisywany jest poprawnie
    this.areaValidate = function( nameArea ) {
        UI.cleanCode();
        var myNewCode = document.getElementById( nameArea ).value;
        console.log( this.parseNewCode( myNewCode, language ) );

        //console.log("ok");
    };

    this.parseNewCode = function( code, language ) {
        var myNewCode = code;
        //var com;
        var commands;
            if ( language === "pseudo")
                commands = PseudoCommands.getListOfCommands();
            else if ( language === "javascript")
                commands = JavaScriptCommands.getListOfCommands();
            else if ( language === "cpp")
                commands = CppCommands.getListOfCommands();
            else
                commands = JavaCommands.getListOfCommands();
        var lineOfCode;
        var err = 0;

        var i;
        //var j;
        var ln = 1;
        myNewCode = myNewCode.split( '\n' );
        for ( lineOfCode in myNewCode ) {
            i = lineOfCode;
            if( myNewCode[ i ] === "" ) {
                err++;
                console.log( "Linia " + ln + " zawiera blad: " + Msg.error1[ Msg.langNr ] );
            }

            var arr = myNewCode[ i ].split( ':' );

            if ( arr[ 1 ] === undefined ) {
                err++;
                console.log( "Linia " + ln + " zawiera blad: " + Msg.error2[ Msg.langNr ] );
            }

            if ( arr[ 2 ] !== undefined ) {
                err++;
                console.log( "Linia " + ln + " zawiera blad: " + Msg.error3[ Msg.langNr ] );
            }

            if ( !( arr[ 0 ] in commands ) ){
                err++;
                console.log( String( "Nierozpoznana komenda w linii " + ln ) );
            }

            /*

            for( com in commands ){
                j = com;
                if (j === arr[ 0 ] )
                {
                    currentCommand = commands[ i ];
                    currentCommandLabel = com;
                }
            }
            */
            ln++;
        }

        if ( UI.getLineNumbers()[ 0 ] < ln )
        UI.extendLineNumbers( ln - UI.getLineNumbers()[ 0 ] );

        if( err === 0 )
            return String(UI.getTimeNow() + " Parse done, no errors!" );
        else
            return String(UI.getTimeNow() + " Parse done with " + err + " error(s)!" );

    };



};

var Parser = new _Parser();
//var ExecutionAreaValidator = new _Parser();

