'use strict'

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("introduce un numero hasta que sea negativo",0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        contador++;
    }
}while(numero >= 0)

alert("el resultado de la suma es "+suma+" y la media es "+contador);