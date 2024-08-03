'use strict'
//matrices, vectores,arreglos

var a = "";
var nombres = ["vector","balthazar","victoria","guada",22,a,true];

var lenguajes = new Array("php","python","java","dolphin");

console.log(nombres[3]);


/*
//funcionmes con array
console.log(nombres.length); //cant de elementos

var elemento = parseInt(prompt("que elemento quieres del array",0));
if(elemento >= nombres.length){
    alert("introducir numero correcto, menor que "+nombres.length);

}
else{
alert(nombres[elemento]);
}
*/

//recorrer array
/*
for(var i = 0;i<lenguajes.length;i++)
{
    document.write("<li>"+lenguajes[i]+"</li>");
}
    */
//metodo foreach(elemento, index, array) los ultimos dos son opcionales

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+(1+indice)+"-"+elemento+"</li>");


})