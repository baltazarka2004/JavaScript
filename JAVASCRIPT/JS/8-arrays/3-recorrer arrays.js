'use sctrict'

var categorias = ["accion","terror","comedia"];
var peliculas = ["matrix","it","somos como ninos"];

//recorrer arrays

for(let pelicula in peliculas)
{
    document.write("<li>"+peliculas[pelicula]+"</li>");
}



//busquedas

var busqueda = peliculas.find(function(pelicula){
    return pelicula =="matrix";
});
console.log(busqueda);
var busqueda = peliculas.findIndex(function(pelicula){
    return pelicula =="matrix";
});
console.log(busqueda);
/* 
var busqueda = peliculas.find(pelicula => pelicula == "matrix");
console.log(busqueda);
*/



var precios = [10,20,30,40,50];

busqueda = precios.some(precio => precio < 10);
console.log(busqueda);