// Loops

// FOR LOOP
// Structure of a for loop
// for (initial value; condition to evaluate; increment){code to be executed}
// for (let i = 0; i < 10; i++){
//    console.log(i);
// }

// WHILE LOOP
// Structure of a while loop
// while (condition that MUST evaluate to true){code to be executed}
let userGuess;
while (userGuess !== '42'){
  userGuess = prompt("Pick a number");
}

// -------------------------------------------------------

// How to solve the problems - quiz examples

for (let i = 0; i <= 8; i++) {
  console.log(i);
}

for (let potato = 0; potato <= 8; potato++) {
  console.log(potato);
}

// -------------------------------------------------------
// Functions

// STRUCTURE

// function declaration

//            optional information the function may require
// function myFunction(parameters){ 
//   code to be executed
// }

function addTwoNumbers(num1, num2){
  return num1 + num2;
}

console.log(addTwoNumbers(1, 7));
// addTwoNumbers("hello ", "world")

// function expression

// let myFunction = function(){
//   code to execute goes here;
// }

// invoke --> myFunction();