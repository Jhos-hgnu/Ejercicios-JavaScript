/*Escribe una función recursiva llamada sumaHasta que reciba un número n y devuelva 
la suma de todos los números desde 1 hasta n.

Ejemplo esperado:

sumaHasta(5) → 15

sumaHasta(10) → 55 */

function sumaHasta(numero){

    if(numero == 0){
        return numero;
    }
    
    numero += sumaHasta(numero - 1);

    return numero;

}

console.log(sumaHasta(5));
