/*
Escribe una función contarBs que tome una cadena como único argumento
y devuelva un número que indique cuántos caracteres B en mayúscula hay en
la cadena.
*/

function contarBs (cadena){
    
    let contador = 0;

    for(let i = 0; i < cadena.length; i++) {

        if(cadena[i] == "B"){ contador++}
    }

    return contador;
}

//Alternativa

function contarBs2(cadena){
    return (cadena.match(/B/g) || []).length;
}

//Primera forma
console.log(contarBs("Hola Bebe"))

//Segunda forma
console.log(contarBs2("Hola Bebesote"));



/*
escribe una función llamada contarCaracter que se comporte como contarBs, 
excepto que toma un segundo argumento que indica el carácter que se va a contar 
(en lugar de contar solo caracteres B en mayúscula).
Reescribe contarBs para hacer uso de esta nueva función.
*/

//Forma 1
function contarLetraBs (cadena, letra){
    
    let contador = 0;

    for(let i = 0; i < cadena.length; i++) {

        if(cadena[i] == letra) { 
            contador++
        }
    }

    return contador;
}

//Forma 2
function contarLetra(cadena, letra){
    const regex = new RegExp(letra, 'g');
    return (cadena.match(regex) || []).length;
}
console.log(contarLetraBs("Josue Fernando Hicho Garcia", "e"))
console.log(contarLetra("Josue Fernando Hicho Garcia", "e"))