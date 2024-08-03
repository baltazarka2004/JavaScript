'use strict'

window.addEventListener("load",function()
{
    //////////////////timers///////////////////////////

    
    var tiempo = this.setInterval(function()
    {
        console.log("setinterval ejecutado");
        var encabezado =  document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px";
            encabezado.style.color = "red";
        }
        else
        {
            encabezado.style.fontSize = "50px";
            encabezado.style.color ="blue";
        }
        
    },1000);// 3000 = 3 segundo


    //set time out, se ejecuta 1 sola vez
    /*
    var tiempo = this.setTimeout(function()
    {
        console.log("setinterval ejecutado");
        var encabezado =  document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px";
            encabezado.style.color = "red";
        }
        else
        {
            encabezado.style.fontSize = "50px";
            encabezado.style.color ="blue";
        }
    },5000);
    */



    var stop = this.document.querySelector("#stop");
    stop.addEventListener("click",function(){
        alert("has parado el bucle");
        clearInterval(tiempo);
    }
    );
    

    

});