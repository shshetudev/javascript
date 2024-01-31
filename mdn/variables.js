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

// Comments
// Single line comment

/* Multi
    Line
    Comment */

// Conditionals -> If block

// let ice_cream = 'chocolate' // snake case -> python
// let ice-cream = 'chocolate' // snake case -> Kabab
// let IceCream = 'chocolate' // snake case -> pascal
// let _ice_cream = 'chocolate'

let iceCream = 'chocolate' // camel case iceCream -> Java
if(iceCream == 'chocolate') {
    console.log("I love chocolate ice cream!")
} else {
    console.log("Awww, but chocolate is favorite...")
}


// 4. Array
let programmers = ['Shetu', 'Shabab'];
console.log(programmers);

console.log('First value of the array: ', programmers[0]);
console.log('Second value of the array: ', programmers[1]);

// loop: for loop
printArray(programmers) // Function invocation

// function defination/defining
// argument -> programmers
// No return function
function printArray(programmers) { // function defination
    // Local scope
    let name = 'Shetu'; // local variable
    for(let i=0; i<programmers.length; i++){
        console.log("Value",i,":", programmers[i]);
    }

    console.log(name)
    console.log(global_name)
}

////////////////////////////////////////////////////
let number1 = 12;
let number2 = 10;

let multiplicationResult = multiplicationFunc(number1, number2);
console.log(multiplicationResult);

console.log(multiplicationFunc(1, 2));
console.log(multiplicationFunc(0.5, 4));

// Function takes 2 arguments and returns number
// Reusable
function multiplicationFunc(num1, num2) {
    let result = num1 * num2;
    return result;
}

var newName = "Shahariar"
newName = 12
console.log(newName);

const myName = "Shabab"
console.log(myName)

// null values
// function setUsername() {
//     // let, var
//     const myName = "Please"
//     myName = 12
// }

//////////////////// Variable hoisting //////////////////////
var y = 6;
console.log(y === undefined); // === condition check -> boolean result


console.log(x === undefined);
var x = 3;

(function() {
    // var m;
    console.log(m);
    var m = "local value"
})();


///////////// Constants ////////////////
const PI = 3.14;




