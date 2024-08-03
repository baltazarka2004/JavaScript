'use script'
//evento load


window.addEventListener("load",function()
{

    //////////////////////////////////////////MOUSE EVENT//////////////////////////////////////////////////////////////////////////////////////////////////////////


    //clicker event

    var boton = document.querySelector("#boton");

    function cambiar_color()
    {
        console.log("dieron click");
        var bg = boton.style.background;
        if(bg == "green")
        {
            boton.style.background = "red";
        }
        else
        {
            boton.style.background = "green";
        }
        return true;
    }

    var boton = document.querySelector("#boton");
    boton.addEventListener("click",function(){
        cambiar_color();
    });


    //mouse over

    boton.addEventListener("mouseover",function(){
        boton.style.background = "grey";
    });


    //mouseout
    boton.addEventListener("mouseout",function(){
        boton.style.background = "white";
    });




    /////////////////////////////keywoard event//////////////////////////////////////


    //focus

    var input = document.querySelector("#campo_nombre");
    input.addEventListener("focus",function(){
        console.log("estas dentro del input");
    });  // cada vez que entre al input salta el evento focus


    //blur
    input.addEventListener("blur",function(){
        console.log("EVENTO BLUR");
    }); // cada vez que salga del input

    //keydown
    input.addEventListener("keydown",function(event){
        console.log("[keydown] estas pulsando una tecla", String.fromCharCode(event.keyCode)); //String.fromCharCode() sirve para capturar la escritura del teclado del usuario
    });


    //keypress
    input.addEventListener("keypress",function(event){
        console.log("[keypress] estas precionando la tecla",String.fromCharCode(event.keyCode));
    });



    //keyup
    input.addEventListener("keyup",function(event){
        console.log("[keyup] tecla soltada",String.fromCharCode(event.keyCode));
    });



    


}); //end load







 
 




