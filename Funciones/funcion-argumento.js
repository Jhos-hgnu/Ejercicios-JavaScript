/*Ejercicio 4: Función como argumento
Crea una función que reciba otra función como parámetro y la ejecute con un valor específico.*/

function numero(primerNumero){
    return primerNumero + 1;
}


function suma (numero){
    return console.log(numero **2);
}

//suma(numero(5));
//Funciona pero no es exactamente lo que se pide

function aplicarOperacion(operacion, valor){
    return console.log(operacion(valor));
}

function incrementar (n){
    return n + 1;
}

aplicarOperacion(incrementar, 2);