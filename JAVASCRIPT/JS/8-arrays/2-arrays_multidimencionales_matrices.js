'use sctrict'

var categorias = ["accion","terror","comedia"];
var peliculas = ["matrix","it","somos como ninos"];


//para ordenar el array
peliculas = peliculas.sort();
console.log(peliculas);
peliculas.reverse();
console.log(peliculas);

var cine = [categorias,peliculas];

console.log(cine[1][1]);//el primer cochete selecciona que array estoy eligiendo, el segudno que elemento de ese array quiero
console.log(cine[1][2]);




/*
do
{
    var elementos = prompt("introduce tu pelicula");
    peliculas.push(elementos);

}while(elementos != "acabar");

peliculas.push("batman"); // agrega elemento al array
console.log(peliculas);
*/

var indice = peliculas.indexOf("it");
console.log(indice);//posision de la pelicula en el array


if(indice>-1){
    peliculas.splice(indice,1)
}
console.log(peliculas);


//array a texto


console.log(peliculas.join());
//convertir string en array

var cadena = "text1 , texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);