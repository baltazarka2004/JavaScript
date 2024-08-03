'use strict'
// BOM - browser object mode
/*
function getbom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}
*/
function getbom(){
    console.log(screen.width)
    console.log(screen.height);
    console.log(window.location);
    
}

function redirect(url){
    window.location.href = url;
}


function abrir_ventana(url){
    window.open(url);
}

getbom();



