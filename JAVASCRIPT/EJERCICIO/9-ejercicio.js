'use strict'
//ej de array
/*
1 programa que pida 6 num y los meta en un array
2 mostrar todos sus elementos en el cuerpo de la pagina y la consola
3 hay que ordenar y mostrar el array
4 invertir el orden del array
5 mostrar cantidad de elementos del arrya
6 busqueda de un valor introducido por el usuario, y que nos diga si esta o no en el array, si esta que diga la posision
*/

//array prinmcipal
var conj = [];
//introduccion de valores
for(var i=0;i<6;i++)
{
    do
    {
        var num = parseInt(prompt("ingrese un numero para meterlo en el array:",0));
        if(isNaN(num) == true)
        {
            alert("no ingreso un numero");
        }
        
    }while(isNaN(num)== true);
    conj.push(num);
}
console.log(conj);
//mostrar el cuerpo del array
for(var i = 0;i<conj.length;i++)
{
    document.write(conj[i]+"</br>");
    console.log(conj[i]);
}
//ordenar el array
conj.sort();
console.log("array ordenado"+conj);
//invertir el array
conj.reverse();
console.log("array invertido"+conj);

//escribirla cantidad de elementos

document.write("la cantidad de elementos del array es de:"+conj.length);

//busqueda por el usuario
var busqueda = parseInt(prompt("ingresar numero a encontrar:",0));
var posision = conj.findIndex(numero => numero == busqueda); 
if(posision && posision!=-1)
{
    
    document.write("<h1>encontrado</h1><br><h2>posision:"+posision+"</h2>");


}
else
{
    alert("no esta");
}