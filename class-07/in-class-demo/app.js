'use strict';

// // STRUCTURE OF A FUNCTION

// // function functionName(parameters){code to be executed - steps;}

//another way you'll see it - notice the indentation inside the curly brackets
//      function functionName(parameters){
//        code to be executed - steps;
//      }

// // declaring your function <-- DO IT THS WAY!!!!!
let usersName; // this is declaring a global variable, outside a function, no value

function greetUser() {
  usersName = prompt("What is your name?"); // reassing value of global function
  if (usersName == ""){                     // check if user didn't type anything
    usersName = prompt("Please enter your name!"); // give them another chance
  }
  console.log(usersName); // print their response to console.
  document.write("Hi " + usersName + " welcome to my page!"); // write message to page
  return usersName;      // return usersName from function - must be last step!
}

greetUser(); // invoke/call your function for it to work

// You can store the result of a function in a variable, to access the data later
// let yourName = greetUser();
// console.log("Your name here: ", yourName);


// function expression <-- we're not gonna do this right now
// let newFunction = function () {
//   console.log("Hello from inside the function expression");
// }

// ---------------------------------------------------------------------------

function customAlert() {
  if (usersName == "Kassie") {
    alert("Hiya Teach!");
  } else if (usersName == "Ben" || usersName == "Aaron" || usersName == "Joey") {
    alert("TAs are rockstars!");
  } else {
    alert("Welcome to Class 6, Javascript is magical!");
  }

  console.log("We're out of the conditional logic now.");
}

customAlert();

// ----------------------------------------------------------------------

//                      parameters
function addTwoNumbers(num1, num2){
  let sum = num1 + num2; // variable holds result of num1 and num2
  return sum;            // return that variable
}

//                              arguments
let thisOne = addTwoNumbers("Hello ", "world"); // store the result of a function
let thatOne = addTwoNumbers(42, 42);            // store the result of a function

console.log("This one ", thisOne); // see the result of function stored in variable
console.log("That one ", thatOne); // see the result of function stored in variable

// ----------------------------------------------------------------------

// NOTES FROM REPL ABOUT LOGICAL OPERATORS

let x = 10;
let y = 5;

console.log(x === y); // this returns false, they are not strictly equal

// logical operators
// logical OR
console.log(x < y || x === 10); // this returns true because one OR the other is true

// logical AND
console.log(x > y && x === 10); // this returns true because on AND the other are true

// this will be true if user's name turned uppercase is either ben OR aaron OR joey
console.log(usersName.toLowerCase() == "ben" || usersName.toUpperCase() == "aaron" || usersName.toUpperCase() == "joey"); 