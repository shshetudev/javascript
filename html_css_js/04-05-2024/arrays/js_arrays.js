const cars = [
    "BMW", //0
    "Rolce royece", //1
    "Lambergini", //2
    "Toyota" //3
]
console.log(cars)
console.log(cars.toString())

const flowers = [
    {name: "Rose", color: "Red"}, 
    {name: "Marrigold", color: "Yellow"}
]
console.log(flowers)

/// For loop
const fruits = ["Banana", "Orange", "Apple", "Mango"]
for (let i=0; i<fruits.length; i=i+1) { // initialization; test-condition; increment/decrement;
    console.log(fruits[i])
}
