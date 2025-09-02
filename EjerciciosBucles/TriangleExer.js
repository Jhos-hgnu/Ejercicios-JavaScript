/*Crea una programa que use un bucle para mostrar 
un triángulo descendente*/

let numeral = ""
for(let i = 1; i <= 7; i++){
    numeral += "⬜"
    console.log(numeral)   
}

for(let line = ""; line.length < 8; line += "#")
    console.log(line)

console.log("Hola")
/* Como anotación, logre hacer el ejrcicio en aprox 8 minutos o menos,lo cual fue menos de la mitad de tiempo
que la primera vez que lo intenté 10/02/25*/