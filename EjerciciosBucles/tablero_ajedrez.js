/*Escribe un programa que cree una cadena que represente un tablero de 8x8
usando caracteres de salto de línea para separar las líneas. En cada posición
del tablero hay un carácter de espacio o un carácter "#", los caracteres deben
formar un tablero de ajedrez. */

/*Al completar la primera parte crea una variable size para que funcione
con cualquier size*/

for(n = 1; n <= 8; n++){
    let board = ""
    if(n % 2 == 0) board += "#"
    console.log(board)
    for(i = 1; i <= 8; i++){
        let board2 = ""
        if(n % 2 !== 0) board2 += "#"
        console.log(board2)

    }
}