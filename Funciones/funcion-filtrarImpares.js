/*
Crea una función flecha llamada filtrarImpares que reciba un arreglo de números y devuelva 
un nuevo arreglo solo con los números impares.

Después, prueba tu función con un arreglo de 1 a 15

*/

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


//==================================
//Soluciones:
//Mi solucion inicial
const filtrarImpares = (number) => {
    const numbersImpares = [];

    for(let i = 0; i < number.length; i++){
        
        if(number[i] % 2 != 0){
            numbersImpares.push(number[i])
        }

    }
    
    return numbersImpares;
}
    
console.log(filtrarImpares(numbers));


//Otras posibles soluciones
//Otra solucion utilizando forEach

const filtrarImpares2 = (numbers) => {
    const impares = [];
    numbers.forEach(number => {
        if(number % 2 !== 0) impares.push(number);
    });
    return impares;
}

console.log(filtrarImpares2(numbers))


//Otra solución sería utilizar la función filter

const filtrarImpares3 = (numbers) => numbers.filter(numero => numero % 2 !== 0);
console.log(filtrarImpares3(numbers)); 

//EJERCICIO EXTRA
//Utiliza la funcion filter para filtrar numeros menores que 17
const numeros = [2,3,4,5,8,6,9,0,10,12,14,15,17,18,20,21,450]

const filtrarMenor17 = (numeros) => numeros.filter(numero => numero <= 17);
console.log(filtrarMenor17(numeros))