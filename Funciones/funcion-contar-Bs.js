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