const flowers = ["Rose", "Marrigold", "Waterlily", "China-rose"]
// checking is it an array
console.log(typeof flowers) // typeof: Asking what is it's type
console.log(Array.isArray(flowers))
console.log(flowers instanceof String) // instanceof: Identify which is your parent

// ------------------------ Array Methods ----------------------------
console.log("------------------------ Array Methods ----------------------------")

// at(): Finds the value at the specific index, just like [1]
const fruits = ["Banana", "Orange", "Apple", "Mango"]
let fruit = fruits.at(1)
console.log(fruit)


// join(): joins two entries of an array and convert the complete array into string 
const fruits2 = ["Banana", "Orange", "Apple", "Mango"]
let fruits2toStr = fruits2.toString() + "#"
console.log(fruits2toStr)
let fruits2Str = fruits2.join(" Shabab ")
console.log(fruits2Str)

// pop(): Removes the last element of an array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"]
let lastFruit = fruits3.pop()
console.log(lastFruit)
console.log(fruits3)


// push(): Adds a new element to an array(in the end)
const fruits4 = ["Banana", "Orange", "Apple", "Mango"]
let lastAddedFruit = fruits4.push("Grape")
console.log(lastAddedFruit)
console.log(fruits4)

// shift(): Returns the value which is shifted out
const fruits5 = ["Banana", "Orange", "Apple", "Mango"]
let shiftedFruit = fruits5.shift()
console.log(shiftedFruit)
console.log(fruits5)

// unshift(): Returns the value which is shifted out
const fruits6 = ["Banana", "Orange", "Apple", "Mango"]
let unshiftedFruit = fruits6.unshift("Grape")
console.log(unshiftedFruit)
console.log(fruits6)

// delete()
const fruits7 = ["Banana", "Orange", "Apple", "Mango"]
let deletedItem = delete fruits7[0]
console.log(deletedItem)
console.log(fruits7)