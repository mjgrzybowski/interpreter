commands = {
    "SS":{numberOfPars:2,fnc:function(m,pars){
        m[pars[0]]=Number(pars[1]);
    }},
    "WZS":{numberOfPars:2},
    "SZ":{numberOfPars:2,fnc:function(m,pars){
        m[pars[1]]=Number(m[pars[0]]);
    }},
    "ZWJ":{numberOfPars:1,fnc:function(m,pars){
       m[pars[0]]++;
    }},
    "ZMJ":{numberOfPars:1,fnc:function(m,pars){
        m[pars[0]]--;
    }},
    "IDL":{numberOfPars:2,fnc:function(m,pars){
        if (m[pars[0]]!=0)
        {
            lastExecutedLine = pars[1]-1;
        };
    }},
    "END":{numberOfPars:0,fnc:function(m,pars){
       console.log('koniec');
       flush();
    }}
        };
memory = {};

function ParseLine(line) {
    var currentCommand = undefined;

    if(line=="")
        return "blank";

    var arr = line.split(':');

    if (arr[1]==undefined)
        return "W lini nie ma znaku ':'";

    if (arr[2]!=undefined)
        return "W lini jest więcej niż jeden znak ':'";

    for (c in commands) {
        if (c==arr[0])
            {
                currentCommand = commands[c];
                currentCommandLabel = c;
            }
    }

    if (currentCommand==undefined)
        return "Nierozpoznana komenda";

    var pars =  arr[1].trim().split(',');

    if (arr[1].trim() == "")
    {
        pL = 0;
        pars = [];
    }
    else
    {
        pL = pars.length;
    }

    if(pL != currentCommand.numberOfPars)
        return "Zła liczba parametrów komendy, "+currentCommandLabel+" przyjmuje "+currentCommand.numberOfPars+"parametrów, otrzymała "+pL ;

    if( pL!=0 )
        for (p in pars)
        {
            if(pars[p].trim()=="")
                return "Puste miejsce na parametr!"

            pars[p] = pars[p].trim();


        }

    return {command:currentCommand,pars:pars};

}

function ParseCode() {
    var currentCode = $('#code').val();
    var lnM1, ln
    currentCode = currentCode.split('\n')

    for (lnM1 in currentCode)
    {

        ln = lnM1 + 1;
        parsed = ParseLine(currentCode[lnM1]);
        console.log(parsed)

    }

    return currentCode;
}

function CleanCode() {
    var currentCode = $('#code').val();
    var lnM1, ln, newCode;
    currentCode = currentCode.split('\n')

    for (lnM1 in currentCode)
    {

        ln = lnM1 + 1;
        currentCode[lnM1] = currentCode[lnM1].trim();


    }

    $('#code').val(currentCode.join('\n'));
}

function placeMarker(nol){
    $('#execMarker').animate({'top':3+16*(nol-1)},200);
}

function drawLineNums(n){
    for(var i= 1;i<=n;i++)
    {
             $('.linesNums').append(i+'<br/>');
    }
}

drawLineNums(20);
CleanCode();
//ParseCode()

var memory = [];
var lastExecutedLine = 0;

function flush(){
    memory = [];
    lastExecutedLine = 0;
    console.log('flushed!');
}

function makeStep(){
    lastExecutedLine++;
    console.log(lastExecutedLine);
    placeMarker(lastExecutedLine);
    executeLine(lastExecutedLine);

}

function executeLine(n) {
    var currentCode = $('#code').val();
    var lnM1, ln
    currentCode = currentCode.split('\n')



    var todo = ParseLine(currentCode[n-1]);
    if(typeof(todo)!="string")
    {
        exec(todo,memory);
        console.log(memory);
    }
    else
    {
        if(todo!="blank")
            alert('błąd w lini n: ' + todo);
    }

}

function exec(what,mem){

    what.command.fnc(mem,what.pars);

}

$('#step').click(makeStep);
$('#flush').click(flush);