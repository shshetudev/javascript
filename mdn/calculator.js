// todo: Take two numbers as input from command line
var firstNumber = 20;
var secondNumber = 10;

const ADD = 'ADD';
const SUB = 'SUB';
const MUL = 'MUL';
const DIV = 'DIV';
const MOD = 'MOD';

// todo: Take it from command line
calculate(ADD, firstNumber, secondNumber);
calculate(SUB, firstNumber, secondNumber);
calculate(MUL, firstNumber, secondNumber)
calculate(DIV, firstNumber, secondNumber);
calculate(MOD, firstNumber, secondNumber)

function calculate(operationType, firstNumber, secondNumber) {
var result = 0;

if(operationType == ADD) {
    result = firstNumber + secondNumber;
}
else if(operationType == SUB) {
    result = firstNumber - secondNumber;
} else if(operationType == MUL) {
    result = firstNumber * secondNumber;
} else if(operationType == DIV) {
    result = firstNumber/secondNumber;
} else if(operationType == MOD) {
    result = firstNumber % secondNumber;
} else {
    console.error(":: WRONG OPERATION TYPE ::")
}
console.log(operationType, " of ", firstNumber, " and ", secondNumber, " is: ", result);
}
