/**
 * Created with JetBrains WebStorm.
 * User: kamil
 * Date: 01.12.12
 * Time: 23:19
 * To change this template use File | Settings | File Templates.
 */

// code used as first on site

code1 = "SS: a,3\n\
SS: b,4\n\
SS: n,0\n\
SS: m,0\n\
SS: wynik,0\n\
SZ: b,m\n\
\n\
SZ: a,n\n\
\n\
ZWJ: wynik\n\
ZMJ: n\n\
\n\
IDL: n,9\n\
\n\
ZMJ: m\n\
\n\
IDL:m,7\n\
\n\
END:"

code2="SS: a,3\n\
SS: b,4\n\
ZWJ: a\n\
ZMJ: b\n\
END:"


function loadCode(){
    document.getElementById("code").value=code2;
}

