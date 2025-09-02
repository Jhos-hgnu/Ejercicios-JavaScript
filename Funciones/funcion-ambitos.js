/*Ejercicio 2: Ámbito local vs global
Declara una variable global con un nombre. Dentro de una función, crea otra variable con el mismo nombre pero diferente valor.
Muestra cómo los valores cambian según el contexto desde el que se accede.*/

let globalVariable = 23;

function localVariable (sumNumber) {

    let globalVariable = sumNumber + 1;
    console.log("Imprimiendo variable local: " + globalVariable);
} 

console.log('Imprimiendo variable global: ' + globalVariable);
localVariable(globalVariable);