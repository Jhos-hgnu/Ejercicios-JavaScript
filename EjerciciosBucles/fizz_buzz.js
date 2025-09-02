/* Escribe un programa que imprima todos los números
del 1 al 100, para los números divisibles por 3, se debe
imprimir "Fizz" y para los divisibles por 5, "Buzz"*/

/* Modifica el programa para que en el caso que sean divisibles
por 3 y 5 a la vez, se imprima "FizzBuzz"  */

//Logre el ejercicio en menos tiempo que la primera vez pero el código no es tan eficiente
for(i = 1; i <= 100; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }else if(i % 3 == 0){
        console.log("Fizz")
    }else if(i % 5 == 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }  
}


//Solución del Libro, leí la solución la entendí y la escribí desde cero(sin volver a ver la solución)
for(j = 1; j <= 100; j++){
    let Output = ""
    if(j % 3 == 0) Output += "Fizz"
    if(j % 5 == 0) Output += "Buzz"
    console.log(Output || j)

}