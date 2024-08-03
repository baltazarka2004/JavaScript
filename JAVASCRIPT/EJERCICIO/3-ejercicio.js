'use strict'

var inicio = parseInt(prompt("introducir un numero inicial",0));
var final   = parseInt(prompt("introducir un numero final",0));

document.write("<h1>de "+inicio+" a " + final + " estan estos numero:</h1>");
for(var i=inicio;i<final;i++)
{
    document.write(i +"<br>");
}