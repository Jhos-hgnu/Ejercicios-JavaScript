/*Define una función que reciba dos números y devuelva el mayor de ellos.
Piensa en cómo recibir parámetros, comparar y devolver un resultado.*/

function largeNumber(firstNumber = 0, secondNumber = 0) {
    if(firstNumber === secondNumber) { 
        return "Son iguales"
    } else {
        return (firstNumber > secondNumber) ? firstNumber : secondNumber;
    }
}


console.log(largeNumber(4,));
console.log(largeNumber());
console.log(largeNumber(22,22));