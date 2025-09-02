//Mi código
let resta; 
let firstNumber = 9;
let secondNumber = 6;

resta = firstNumber - secondNumber;

if(resta > 0){
    console.log("es mayor a cero");
    if(resta % 2 == 0){
        console.log("Es par");
    }else{
        console.log("Es impar");
    }
}else{
    console.log("Es menor o igual que cero");
}



//Código del ejemplo
var num1 = prompt ("Ingrese el num 1: ");
var num2 = prompt ("Ingrese el num 2: ");

var resta2 = num1 - num2;

if(resta2 > 0){
    console.log("Es mayor a 0");
    let imparpar = resta % 2;
    if(imparpar == 0){
        console.log("Es par");
    }
    else {
        console.log("Es impar");
    }
}else {
    console.log("Es menor o igual a 0");
}