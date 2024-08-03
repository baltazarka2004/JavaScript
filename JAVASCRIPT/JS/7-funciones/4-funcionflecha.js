'use strict'

//funciones anonimas
//funcion que no tiene nombre
var peli = function(nombre){
    return "la peli es:"+nombre;
}

//callback
//funcion dentro de otra funcion
function sumame(num1, num2, sumaymuestra, sumaPorDos){ //transformo los ultimops dos datos en una funcion anonima por eso le paso los dos parametros de sumar
    var sumar = num1 + num2;
    sumaymuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5,7,(dato)=>{
    console.log("la suma es:",dato);
},
(dato)=>{ //sustituyo la palabra funtion por una flecha
    console.log("la suma por dos es:",(dato*2));
    
});