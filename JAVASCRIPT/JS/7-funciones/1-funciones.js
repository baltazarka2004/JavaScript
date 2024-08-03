'use strict'

//funciones con parametros


function calculadora(numero1, numero2){
    console.log("suma "+(numero1+numero2));
    console.log("resta "+(numero1-numero2));
    console.log("division "+(numero1/numero2));
    console.log("multiplicacion "+(numero1*numero2));

    return 0;
}


console.log(calculadora(12,7));


//parametros opcionales
function calculadora2 (num1,num2,mostrar = false){
    
    if(mostrar==false)
    {
        console.log("suma "+(numero1+numero2));
        console.log("resta "+(numero1-numero2));
        console.log("division "+(numero1/numero2));
        console.log("multiplicacion "+(numero1*numero2));
    }
    else
    {
        document.write("suma "+(numero1+numero2));
        document.write("resta "+(numero1-numero2));
        document.write("division "+(numero1/numero2));
        document.write("multiplicacion "+(numero1*numero2));
    }
}

calculadora2(54,34);
