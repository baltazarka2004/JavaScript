'use strict'
//transformacion de textos
var numero = 44;
var texto1 = "    bienvenido al curso al de javascript al al";
var texto2 = "esta piola";

var dato = numero.toString();
console.log(typeof(dato));
dato = texto1;
console.log(dato.toUpperCase());
console.log(dato.toLowerCase());


//calcular longituda de un texto

var nombre = "balthazar martinez rial";
console.log(nombre.length);


//concatenar
var textotoal = texto2+texto1;
console.log(textotoal);


//metodos de busqueda en texto

var busqueda = texto1.indexOf("al"); // me devuelve el numero de apartir de que posision esta
//texto.lastIndexOf
//texto1.search

busqueda = texto1.match("al"); //busqueda completa de donde aparece, en que texto y en que lugar
busqueda = texto1.match(/al/g); //busqyueda global de todos
console.log(busqueda);


//subtrs

busqueda = texto1.substr(14,10); //saca una palabra apartir de una x posision y un x cantidad de carateres
console.log(busqueda);

//para sacar una letra en concreto
console.log(texto1.charAt(14));
//texto1.startsWith("texto") me busca un texto y me va a dar true o false

//////////////////////////////////////////////////////////////
//funciones de remplazo de texto
dato = nombre.replace(" ","");
dato = dato.replace(" ","");
console.log(dato);
//slice hasta x num o de x numero a otro
dato = texto1.slice(14);
console.log(dato);
//split separa cada palabra con un caracter que yo quiero
console.log(texto1.split(" "));

//TRIM quita los espacions en blanco tanto de adelanto com de atras
console.log(texto1.trim())

