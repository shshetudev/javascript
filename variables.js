// Weakly typed: Javascript, python
// Strongly typed: Java

// Variables -> Containers, Varries

var global_name = 'Shabab'; // Global Scope -> global variable

// Data types of variables

// 1. String: "", ''
let first_name = "Shabab";
console.log("Contains firstly: ", first_name);

let last_name = 'Ahmed';
console.log("Contains Secondly: ", last_name);

let full_name = first_name + ' ' +last_name;
console.log("Full name: ", full_name)

// 2. Number
let first_num = 10;
console.log("First num: ", first_num);

// let second_num = 20;
let second_num = "20"; // Data type preference: String -> Number
console.log("Second num: ", second_num);

let addition = first_num + second_num;
console.log("Addition: ", addition);

let multiplication = first_num * second_num;
console.log("Multiplication: ", multiplication);

// 3. Boolean
let isShababReadForProgramming = false;
console.log(isShababReadForProgramming);

if(isShababReadForProgramming) {
    console.log("Shabab will be a great programmer.");
} else {
    console.log("He has to try harder");
}

// 4. Array
let programmers = ['Shetu', 'Shabab'];
console.log(programmers);

console.log('First value of the array: ', programmers[0]);
console.log('Second value of the array: ', programmers[1]);



// loop: for loop
printArray(programmers) // Function invocation

// function defination/defining
function printArray(programmers) {
    // Local scope
    let name = 'Shetu'; // local variable
    for(let i=0; i<programmers.length; i++){
        console.log("Value",i,":", programmers[i]);
    }

    console.log(name)
    console.log(global_name)
}