'use strict'

var num1 = parseInt(prompt("introducir un numero",0));
var num2 = parseInt(prompt("introducir otro numero",0));

document.write("<h1>de "+num1+" a " + num2 + " estan estos numero impares:</h1>");


for(var i = num1+1; i<num2 ; i++)
{
    if(i%2 != 0)
    {
        document.write(i+"<br>");
    }
}