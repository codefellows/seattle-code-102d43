// declare a variable called message, assign it the value of a string
let message = "Hello Class!";

// alert the user, pop-up box
alert("What is your name?");

// declare a variable, assign it the value returned from the prompt
// the value returned from a prompt is whatever the user types
let theirNameGoesHere = prompt("What is your name?");

// print the value of the variable to the console
console.log(theirNameGoesHere);

// declare a variable called usersName, assign it the return from the prompt
let usersName = prompt("What is your name?");

// string concatenation -- smooshing strings and values together into a big string
console.log("Hi " +usersName + " welcome to my page!"); // console.log() prints to the console only

document.write("Hi " + usersName + " welcome to my page!"); // document.write() prints to the actual HTML page

// structure of conditional if/else statement
// if (this is true){execute this code} else {execute this code}

if (theirNameGoesHere == "Kassie"){
  alert("Hiya Teach!");
} else if (theirNameGoesHere == "Ben") {
  alert("TAs are rockstars!");
} else if (theirNameGoesHere == "Aaron") {
  alert("TAs are rockstars!");
} else if (theirNameGoesHere == "Joey"){
  alert("TAs are rockstars!");
} else { 
  alert("Welcome to Class 6, Javascript is magical!");
}

let number = 42;

let usersGuess = prompt("Guess what number I'm thinking of between 1 & 50");
if (usersGuess == number){
  alert("That's correct!");
} else if (usersGuess > number){
  alert("That's too high!");
} else if (usersGuess < number){
  alert("That's too low!");
} else {
  alert("That's incorrect");
}

document.write("SHOWING WHERE THE SCRIPT IS RUNNING");
document.write("Hi");
document.write("Hi");
document.write("Hi");
document.write("Hi");
