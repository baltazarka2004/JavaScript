'use strict'
//DOM- document object mode

function cambiacolor(color)
{
    caja.style.color = color;
}
//CONSEGUIR ELEMENTOS CON UN ID EN CONCRETO


var caja = document.getElementById("micaja");
caja.innerHTML
/*
var caja = document.getElementById("micaja");//busca los elementos por id
//var caja = document.querySelector("#micaja");
caja.innerHTML = "hola soy un nuevo texto"; //caambio el texto dsd JS
caja.style.background = "green";
caja.style.padding = "10px";
caja.style.color = "grey";
caja.className = "hola hola 2";

console.log(caja);

*/



//CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todos_los_div = document.getElementsByTagName("div");

var valor;
for(valor in todos_los_div)  
{
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todos_los_div[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
}
/*
var cont_en_txt = todos_los_div[2];
cont_en_txt.innerHTML = "otro texto para el segundo div";
console.log(cont_en_txt);
*/
console.log(todos_los_div);


//conseguir elementos por su clase
var divs_rojo =  document.getElementsByClassName("rojo");
var divs_amarillos = document.getElementsByClassName("amarillo");
console.log(divs_rojo);
var div;
for(div in divs_rojo)
{
    console.log(div);
    if(divs_rojo[div].className == "rojo")
    {
        divs_rojo[div].style.background = "red";
    }
}




//query selector (ES MEJOR PARA ID)
// # para id
// div. para clase


var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);


var etiqeuta = document.querySelector("div");
console.log(etiqeuta);


//query selector all

var varios_id = document.querySelectorAll("div.rojo"); // me devuelve todos los divs
console.log(varios_id);