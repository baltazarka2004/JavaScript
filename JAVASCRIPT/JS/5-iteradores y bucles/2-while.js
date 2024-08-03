'use strict'


//bucle while

let year = 100;

while ( year <= 2051)
{
    console.log("estamos en el año "+year);
    year ++;

}


while(year == 2900)
{
    console.log("estamos en el año "+year);
    year++;

    if(year == 2000)
    {
        break;
    }

}


//do while
year = 30;
do{
    console.log("solo cuadno sea diff a 20");
    year++;
    if(year == 40)
    {
        break;
    }
}while(year > 25);
