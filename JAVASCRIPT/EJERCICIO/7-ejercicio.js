'use strict'

var num = parseInt(prompt("ingrese un numero para tener su tabla de multiplicar",1));

for(var i = 1;i<=10;i++)
{
    document.write(i+" x "+ num+" = "+(i*num)+"<br>");
}