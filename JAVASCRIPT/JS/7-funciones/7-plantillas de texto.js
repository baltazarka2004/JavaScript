'use strict'
//plantillas de texo

var nombre = prompt("METE TU NOMBRE");
var ape = prompt("METE TUS APELLIDOS");

var texto = `
    <h1>hola que tal</h1>
    <h3>mi nombre es ${nombre}</h3>
    <h3>mis apellidos son ${ape}</h3>

`

document.write(texto);