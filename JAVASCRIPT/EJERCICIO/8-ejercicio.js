'use strict'
do{
var num = parseInt(prompt("ingrese el primer numero para operar",0));
var num2 = parseInt(prompt("ingrese el segundo numero para operar",0));

if(isNaN(num) || isNaN(num2))
{
    alert("uno de los dos numeros no es valido, ingrese nuevamente ambos");
}
}while(isNaN(num) || isNaN(num2));

var resultado = "el resultado de la suma es "+ (num+num2)+ "<br>"+"el resultado de la resta es "+(num-num2)+"<br>"+"el resultado de la multiplicacion es "+ (num*num2)+"<br>"+"el resultado de la division es "+(num/num2);


document.write(resultado);


