/* Recursión
Hemos visto que podemos usar % (el operador de resto) para verificar si un
número es par o impar al usar % 2 para ver si es divisible por dos. Aquí hay
otra forma de definir si un número entero positivo es par o impar:
• El cero es par.
• El uno es impar.
• Para cualquier otro número N, su paridad es la misma que N - 2.
1) Define una función recursiva isEven que corresponda a esta descripción. La
función debe aceptar un solo parámetro (un número entero positivo) y devolver
un booleano.


2) Pruébalo con 50 y 75. Observa cómo se comporta con -1. ¿Por qué? ¿Puedes
pensar en una forma de solucionarlo?*/

//Primera forma
function isEven (num){
    let isResult;

    if(num == 1){ return isResult = false}
    if(num == 0){ return isResult = true}

    isResult = isEven(num - 2)

    return isResult;
}

//console.log(isEven(50))

//Segunda forma
function isEven2(num){

    if(num < 0 ) {
        return isEven2(-num);
    }
    
    if(num == 1) { return false; }
    if(num  == 0) {return true; }

    return isEven2(num - 2);
}

console.log(isEven2(-50))
