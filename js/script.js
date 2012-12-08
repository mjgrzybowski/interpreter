var codeInput = new _Code( "", "" );
var codeToTranslate;
//var codeTranslated;
codeInput.setContent( $( '#code' ).val());
var currentCodeStart = codeInput.getContent();

commands = {
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
};
memory = {};

function ParseLine( line ) {
    var currentCommand = null;
    var com;
    var currentCommandLabel = null;

    if( line == "" )
        return Msg.error1[ Msg.langNr ];

    var arr = line.split( ':' );

    if (arr[ 1 ] == undefined )
        return Msg.error2[ Msg.langNr ];

    if (arr[ 2 ] != undefined)
        return String( "W linii jest wiecej niz jeden znak ':'" );
    var i = 0;
    for ( com in commands ) {

        if (com == arr[ 0 ] )
        {
            currentCommand = commands[ i ];
            currentCommandLabel = com;
        }
        i++;
    }

    if ( currentCommand == null )
        return String( "Nierozpoznana komenda" );

    var pars =  arr[ 1 ].trim().split( ',' );
    var pL;
    if (arr[ 1 ].trim() == "" )
    {
        pL = 0;
        pars = [];
    }
    else
    {
        pL = pars.length;
    }

    if( pL != currentCommand.numberOfPars )
        return String("Zla liczba parametrow komendy, " + currentCommandLabel + " przyjmuje " + currentCommand.numberOfPars + "parametrow, otrzymala " + pL);

    if( pL != 0 )
    var j = 0;
    var p;
        for ( p in pars )
        {
            if(pars[ j ].trim() === "" )
                return String( "Puste miejsce na parametr!" );

            pars[ j ] = pars[ j ].trim();
        j++;
        }

    return {
        command: currentCommand,
        pars: pars
    };

}
/*
function ParseCode() {
    var currentCode = currentCodeStart;
    var lnM1, ln;
    currentCode = currentCode.split('\n');
    var i = 0;
    for (lnM1 in currentCode)
    {

        ln = lnM1 + 1;

        var parsed = ParseLine(currentCode[ i ]);
        i++;
        console.log( parsed );
        document.getElementById( "memory-ctnr" ).value = parsed;

    }

    return currentCode;
}
*/

function CleanCode() {
    var currentCode = currentCodeStart;
    var lnM1, ln;
    //var newCode;
    currentCode = currentCode.split( '\n' );

    for (lnM1 in currentCode )
    {

        ln = lnM1 + 1;
        var k = 0;
        currentCode[ k ] = currentCode[ k ].trim();
        k++;

    }

    $( '#code' ).val(currentCode.join( '\n' ));
}

function placeMarker( nol ){
    $( '#execMarker' ).animate( {
        'top': 3 + 16 * ( nol - 1 )
    }, 200 );
}

function drawLineNumbers( n ){
    for(var i= 1;i<=n;i++)
    {
        $( '.linesNums' ).append( i + '<br />' );
    }
}

drawLineNumbers(31);
CleanCode();
//ParseCode()

var memory = [];
var lastExecutedLine = 0;

function flush() {
    memory = [];
    lastExecutedLine = 0;
    console.log( 'flushed!' );
}

function makeStep() {
    lastExecutedLine++;
    console.log( lastExecutedLine );
    placeMarker( lastExecutedLine );
    executeLine( lastExecutedLine );

}

function executeLine( n ) {
    var currentCode = $( '#code' ).val();
    //var lnM1, ln;
    currentCode = currentCode.split( '\n' );



    var todo = ParseLine( currentCode[ n-1 ] );
    if( typeof( todo ) != "string" )
    {
        exec( todo, memory );
        console.log( memory );
    }
    else
    {
        if( todo != "blank" )
            alert( 'blad w linii nr: ' + todo );
    }

}

function exec( what, mem ) {

    what.command.fnc( mem, what.pars );

}

function chooseLanguage( languageName ) {

    codeToTranslate.setCodeLanguage( languageName );


}

function translate( language ) {
    this.language = language;
    lexing(codeInput.getContent() );

}

function run() {



}


$('#step').click( makeStep );
$('#flush').click( flush );
$('#translate').click( translate );
$('#run').click( run );