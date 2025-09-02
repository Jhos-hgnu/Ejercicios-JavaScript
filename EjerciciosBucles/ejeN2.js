console.log("My solution");
for(let i = 1; i <= 100; i++){
    i % 5 == 0 && i % 3 == 0 ? console.log("FizzBuzz") : i % 3 == 0 ? console.log("Fizz") : i % 5 == 0 ? console.log("Buzz") : console.log(i)
}
console.log("-----------------------------------------------");

console.log("Book solution");   
for(let n = 1; n <= 100; n++){
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);

}
   
    //i % 5 == 0 && i % 3 == 0 ? console.log("FizzBuzz") : console.log(i)