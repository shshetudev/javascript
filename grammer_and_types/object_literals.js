// Weakly typed -> does not need explicit data type and variable data type assignment can be changed.
// var demo = "sdfsdf";
// demo = 123;
// Strongly typed -> explicit data type

// Object literals
const sales = "Toyota";

function carTypes(name) { // Argument
return (name == "Honda") ? name : `Sorry, we don't sell ${name}.`; // ?: -> ternary operator

// Ternary operator replaces this block
// if(name == 'Honda') {
//     return name;
// } else {
//     return `Sorry, we don't sell ${name}.`
// }

}

// Object
const car = {
    myCar: "Saturn", // properties
    getCar: carTypes("honda"), // case sensitive
    special: sales
};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);


////////////////////////////////////////////// Example-2 ////////////////
// Object starts with a curly brace: {}
// Array starts with a third bracket: []
const newCar = {
    manyCars: {
        a: "Saab",
        b: "Jeep",
        7: "Mazda"
    }
}

console.log(newCar)
console.log(newCar.manyCars)
