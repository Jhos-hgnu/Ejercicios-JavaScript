let cadena = "#######";

let size = cadena.length;
let j = 0;
let k = 1;

for(i = 0; i < size; i ++){
    let result = cadena.slice(j,k);
    console.log(result);
    k++;
}

console.log("");
//solución libro
for(let line = ""; line.length < 8; line += "#")
    console.log(line);