let frutas = ["naranja", "banana", "kiwi"];
frutas.push("manzana");
console.log(frutas);

//Devuelve el último elemento y lo elimina
//frutas.pop();

//Devuelve el primer elemento y lo elimina
//console.log(frutas.shift());

//Agregar elemento al inicio
frutas.unshift("sandía");
console.log(frutas);

//El filtro tiene la capacidad de establecer una
//condición para filtrar datos que cumplan esa condición
//Includes sirve para indicar si ese elemento está incluido
let frutasConA = frutas.filter((fruta) => fruta.includes("a"));
console.log(frutasConA);

//Método Concat: sirve para literalmente concatenar vectores
let frutas1 = ["naranja", "banana", "kiwi"];
let frutas2 = ["manzana", "mango"];

let todasLasFrutas = frutas.concat(frutas2);
console.log(todasLasFrutas);

//Para revertir el orden de un vector
todasLasFrutas.reverse();
console.log(todasLasFrutas);

//Ordenar de forma alfabéticamente
//Método sort
todasLasFrutas.sort();
console.log(todasLasFrutas);
