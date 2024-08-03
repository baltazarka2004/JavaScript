'use script'

//Condicional IF

var edad = 30;
var edad2 = 12;

if(edad > edad2)
{
    console.log("edad es mayor que edad2");
}
else
{
    console.log("edad 2 es mayor que edad 1");
}

/* operadores relacionales
    mayor >
    mayor igual >=
    menor <
    menor igual <=
    igual ==
    distinto !=

    */

    var edad = 12;
    var nombre = "balthazar";

    if(edad >= 18)
    {
        console.log(nombre+ " tiene"+ edad+ " es , mayor de edad");
    }
    else
    {
        console.log(nombre+ " tiene "+ edad+ " es , menor de edad");
    }

    var edad = 90;
    if(edad < 18 )
    {
        console.log(nombre+ " tiene"+ edad+ " es , mayor de edad");
    }
    else
    {
        if(50 > edad)
        {
            console.log("eres adulto");
        }
        else
        {
            console.log("eres anciano");
        }
    }



    /*
    OPERADORES LOGICOS

    AND &&
    OR ||
    NOT !
    */


    var nombre = "balthazar";
    var edad = 18;

    if (nombre == "balthazar" && edad == 20)
    {
        console.log("accesso accedido");

    }else
    {
        console.log("accesso denegado");
        
    }





    if(nombre == "balthazar" || edad == 98)
    {
        console.log("acceso consedido");
    }
    else
    {
        console.log("accesso denegado");
    }



