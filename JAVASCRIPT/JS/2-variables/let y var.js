//pruebas delet y var
'use strict'


//prueba cop var
var num = 40; //valor 40
if(true){
    var num = 50;
    console.log(num); // valo 50
}

console.log(num); // valor 50

//prueba con let

var texto = "curso de JS";
console.log(texto); //mismo
if(true)
{
    let texto = "hola mundo otra vez"; //valor cambiado
    console.log(texto);
}

console.log(texto); //valor antiguo