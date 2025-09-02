/*Escribe un programa que cree una cadena que represente un tablero de 8x8,
usando caracteres de salto de línea para separar las líneas. En cada posición
del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben
formar un tablero de ajedrez.*/

//my solution
let size = 8; //hola bb besitos, este es un intento de imprimir el pto tablero
let cadena = ""; //después de 2 horas pude hacerlo ._.

for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        let sum = i+ j;
        sum % 2 != 0 ? cadena += "#" : cadena += " "; 
        sum = 0;
    }
    console.log(cadena);
    cadena = "";
}

//Book solution
console.log("-----------------------------------------------");
let sizeb = 8;

let board = "";

for (let y = 0; y < sizeb; y++) {
  for (let x = 0; x < sizeb; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);