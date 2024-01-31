// 2 types: if..else, switch
/**
 * if..else structure:
 * --------------------
 * simple form:
 * ------------
 * if(condition) {
 * statement 1
 * } else {
 * statement 2
 * }
 * 
 * Nested form:
 * -------------
 * if(condition 1) {
 * statement 1
 * } else if(condition 2){
 * statement 2
 * } else {
 * statement 3
 * }
 * 
 * 
 * switch structure:
 * -----------------
 * switch(condition) {
 * case 1: statement 1; break;
 * case 2: statement 2; break; 
 * default:
 *  default statement;
 * }
 */

let fruit = "Papayas"
calculateFruit(fruit)

function calculateFruit(fruitType) {
switch (fruitType) {
   case "Oranges":
    console.log("Oranges are $5 dollar a pound")
   case "Apples":
    console.log("Apples are $6 dollar a pound")
   case "Mangoes":
    console.log("Mangoes are $7 dollar a pound")
    break; 
   default:
    console.log(`Sorry, we are out of ${fruitType}`)  
}
console.log("Is there anything else you would like?")
}