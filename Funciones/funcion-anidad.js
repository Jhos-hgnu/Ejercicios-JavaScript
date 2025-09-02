/*Ejercicio 3: Función anidada
Crea una función saludoCompleto que internamente tenga otra función obtenerNombre.
La función principal debe usar el valor devuelto por obtenerNombre para formar un saludo.*/

function saludoCompleto (nombreIngresado) {

    console.log("Hola humano " + obtenerNombre(nombreIngresado) + " te saludo desde JavaScript!!! ")   
}

function obtenerNombre (nombreIngresado) {
        return nombreIngresado;
    }

saludoCompleto("Señor Albert Einstein");


//Otra forma sencilla de hacer esto seria:
function saludoCompleto2(nombreIngresado) {
    function obtenerNombre(nombre) {
        return nombre;
    }
    console.log("Hola humano " + obtenerNombre(nombreIngresado) + " te saludo desde JavaScript!!!");

}

saludoCompleto2("josue")