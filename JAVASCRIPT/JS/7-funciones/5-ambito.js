'use script'



function holamundo(texto){
    var hola_mundo = "texto local dentro de la funcion"; // esta variable esta solo dentro de la funcion, no es global
    console.log(texto);
    console.log(numero);//utilizo la variable global

}

var numero = 12;
var texto = "hola mundo soy una variable global";
holamundo(texto);