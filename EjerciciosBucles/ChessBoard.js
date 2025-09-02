/* 
Escribe un programa que cree una cadena que represente
un tablero de 8x8, usando caracteres de salto de línea para serparar
las líneas. En cada posición del tablero hay un carácter de espacio o un
carácter "#". Los caracteres deben formar un tablero de ajedrez.

Cuando ya lo tengas, define una variable llamada size
y cambia el programa para que funcione con cualquier size
generando un tablero de alto y ancho dados.
*/
let size = 8;

for(let i = 0; i < size; i++){
    let cadena = "";          
    for(let j = 0; j < size; j++){
        if((i + j) % 2 != 0 ){
            cadena += "⬛";
        } else {
            cadena += "⬜";    
        }    
    }
    console.log(cadena);
} 

//Por algun motivo se me dificulto hacer este ejercicio pero se logro completarlo, ademas hice mejoras