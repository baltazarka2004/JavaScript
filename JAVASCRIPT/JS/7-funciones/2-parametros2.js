'use strict'

function listado_de_frutas(fruta1, fruta2,...todas_las_ff){ //parametro de array
    console.log("fruta 1:", fruta1);
    console.log("fruta 2:", fruta2);
    console.log("resto de frutas",todas_las_ff)
}

listado_de_frutas("naranja","manzana","pera","melon","sandia");//parametros indefinidos

var frutas = ["naranja","manzana"];
listado_de_frutas(...frutas,"pera","melon","sandia");//spred de parametro