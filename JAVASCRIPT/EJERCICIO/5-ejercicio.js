'use strict'

var num = parseInt(prompt("introdusca un numero",0));
document.write("<h1>los numeros divisores de "+num+" son:</h1>");
for(var i=0;i<=num;i++)
{
    if(num%i == 0)
    {
        document.write(i+"<br>");
    }
}