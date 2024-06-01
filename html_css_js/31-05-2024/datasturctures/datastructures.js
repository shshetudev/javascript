// Arrays
// 1st Dimensional
let arr = [1, 2, 3] // index: 0,1,2
console.log(arr)
console.log(`Length: ${arr.length}`)
console.log(`2nd value: ${arr[1]}`)

console.log("\nCharacter array")
let charArr = ['a', 'b', 'c'] // index: 0,1,2
console.log(charArr)
console.log(`Length: ${charArr.length}`)
console.log(`2nd value: ${charArr[1]}`)

console.log("\nMixed array")
let mixedArr = ['a', 1, 'b', 2, 'c', true]
for (let i = 0; i < mixedArr.length; i++) {
    console.log(mixedArr[i])
}
console.log(`Length: ${mixedArr.length}`)
console.log(`${mixedArr[mixedArr.length - 1]}`)

// Multidimensional
// 2nd dimensional
console.log("\n Second Dim array")
let secondDimArr = [
    ['a', 'b', 'c'], //0
    [1,2,3], //1
    ['a',1,'b',2] //2
]

// secondDimArr.length: 3
for (let i = 0; i < secondDimArr.length; i++) { // initialization -> test condition -> increment/decrement: 0: ['a', 'b', 'c'], 1: [1,2,3], 2: ['a',1,'b',2]
    for (let j = 0; j < secondDimArr[i].length; j++) { // [0: 'a', 1: 'b', 2: 'c'].length = 3
        console.log(secondDimArr[i][j]) // secondDimArr[2][3]: 2
    }
 
}

// Object
console.log("\nObjects")
let person = {
    name: "Shabab",
    age: 11
}
console.log(person)