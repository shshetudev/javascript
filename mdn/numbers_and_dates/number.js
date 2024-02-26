// Decimal numbers: (10 numbers: 0->9), base: 10
var num1 = 123456789
var num2 = 42.56


// Binary numbers: 2 (number: 0,1), base: 2
var num3 = 0b10000
// Binary -> Decimal:  1x2^4 + 0x2^3 + 0x2^2 + 0x2^1 + 0x2^0 = 16
console.log(num3)

// Octal numbers: 8 (number: 0->7), base: 8
var num4 = 0O755
// Octal -> Decimal: 7x8^2 + 5x8^1 + 5x8^0 = 448+40+5 = 493
console.log(num4)

// Hexadecimal numbers: 16 (number: 0->F), base: 16
// 0->9, 10=A, 11=B, 12=C, 13=D, 14=E, 15=F
// 0->9,A,B,C,D,E,F
var num5 = 0X12345A
// Hexadecimal -> Decimal: 1x16^5 + 2x16^4 + 3x16^3 + 4x16^2 + 5x16^1 + 10X16^0 = 1193050
console.log(num5)

// Expontiation: 3e2 => 3x10^2
var exponent = 5e2 // 5x10^2
console.log(exponent)

// Number object
const biggestNum = Number.MAX_VALUE
console.log(biggestNum) // 1/10

const smallestNum = Number.MIN_VALUE // (1/(5x10^324))
console.log(smallestNum)

const infiniteNum = Number.POSITIVE_INFINITY
console.log(infiniteNum)

const negInfiniteNum = Number.NEGATIVE_INFINITY
console.log(negInfiniteNum)

const notANum = Number.NaN // Not a Number = NaN
console.log(notANum)

console.log(0/0) // Indeterminant form

// Number parsing methods
const circumference = '4.57aa' // 2*Math.PI*r
console.log("Float value: " + Number.parseFloat(circumference))
console.log("Int value: " + Number.parseInt(circumference))
console.log("Finite value: " + Number.isFinite(0/0))
console.log("Is it integer value?: " + Number.isInteger(4.5))
console.log("Is NaN?: " + Number.isNaN(0/0))

const  radius = parseFloat(circumference) / 2*Math.PI
console.log(radius)

// Math
console.log("PI: " + Math.PI)
console.log("Sin-Theta: " + Math.sin(1.56)) //sin(Theta)
console.log("Cos-Theta: " + Math.cos(2.56)) //cos(Theta)




