 /*




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
 var i;
 for ( com in commands ) {
 i = com;
 if (com == arr[ 0 ] )
 {
 currentCommand = commands[i];
 currentCommandLabel = com;
 }
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

 function ParseCode( currentCode ) {
 var currentCode = currentCode;
 var lnM1, ln;
 currentCode = currentCode.split( '\n' );
 var i;
 for ( lnM1 in currentCode )
 {

 ln = lnM1 + 1;
 i = lnM1;
 var parsed = ParseLine(currentCode[ i ]);

 console.log( parsed );
 //document.getElementById( "memory-container" ).innerHTML = parsed;

 }

 return currentCode;
 }

 */
/*
var codeToTranslate;
//var codeTranslated;
codeInput.setContent( $( '#codeArea' ).val());
var currentCodeStart = codeInput.getContent();








CleanCode();
//ParseCode()


*/






