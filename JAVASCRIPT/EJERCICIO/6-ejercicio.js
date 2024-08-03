'use strict'


do{
    var num = parseInt(prompt("introdusca un numero",0));
    if(isNaN(num))
    {
        alert("numero no valido");
    }

}while(isNaN(num));

if(num%2 == 0)
{
    document.write("numero par");
}
else
{
    document.write("es impar");
}