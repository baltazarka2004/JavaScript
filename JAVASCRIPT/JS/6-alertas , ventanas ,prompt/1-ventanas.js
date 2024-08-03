'use strict'


//ALERTA
alert("hola mundo");

//confirmacion

var resultado = confirm("estas seguro de querer continuar");
if(resultado == true)
{
    resultado = "si";
}
else{
    resultado = "no";
}
alert(" el usuario dijo que "+resultado);



//ingreso de datos
//prompt("que edad tenes?","valor por defecto");
var resultado = prompt("que edad tene?", 19);
console.log("tiene: "+resultado);