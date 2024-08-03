'use strict'
do{

var numero1 = parseInt(prompt("ingrese el primer numero",0));
var numero2 = parseInt(prompt("ingrese el segundo numero",0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1)|| isNaN(numero2))
{
    alert("numero menor a 0 o no es un numero");
    numero1 = parseInt(prompt("ingrese el primer numero",0));
    numero2 = parseInt(prompt("ingrese el segundo numero",0));
}

}while(typeof numero1 == Number || typeof numero2 == Number);

if(numero1 > numero2)
{
    alert(numero1+ " es mayor que "+numero2);
}
else
{
    if(numero2 > numero1)
    {
        alert(numero2 +" es mayor que "+ numero1);
    }
    else
    {
        alert("ambos numero son iguales");
    }
}