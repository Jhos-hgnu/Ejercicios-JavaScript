/*Crea una función llamada presentacion que reciba dos parámetros: nombre y edad.
Si no se pasa edad, debe asumir que la persona es "desconocida".

El resultado debe devolver un mensaje como:
"Soy Ada y tengo 30 años"
"Soy Turing y mi edad es desconocida" */

function saludar(nombre, edad){

    let edadIngresada = edad || " mi edad es desconocida " 
        console.log("Mi nombre es: " + nombre + edadIngresada);
    

}

saludar("Josue", );