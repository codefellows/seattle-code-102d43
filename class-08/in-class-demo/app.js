'use strict';

// STRUCTURE OF A WHILE LOOP
//while (condition evaluates to true){execute this code} 

function guessColor(){
  let usersGuess = prompt('what is my fav color?');
  
  while (usersGuess !== 'yellow'){
    usersGuess = prompt('Wrong! Guess again');
  }
}
guessColor();

// STRUCTURE OF A FOR LOOP
// for (initial value; condition to evaluate; increment){execute this code}

function rateMyPage(){
  let rating = prompt('How many stars would you rate my page? (From 1-5)');
  console.log(rating);
  
  for (let i = 0; i < rating; i++){
    console.log(i);
    document.write('<img style="width:100px;" src="star.jpeg" alt="star picture" />');
  }
}


// -------- NOTES FROM REPL DEMO -----------

// Example of a while loop with an inner increment controlling the loop

// let number = 0;
// while (number < 10){
//   console.log(number);
//   number = number + 2;
// }

// ------------------------------------------------

// Example of a for loop
// for (let i = 0; i < 10; i++){
//   console.log(i);
// }

// ----------------------------------------------------

// Example of a for loop with incrementing in 2 places
// for (let i = 0; i < 100; i++) {
//   console.log(i);
//   i += 9;
// }

// ------------------------------------------------

// Example of a for loop from reading assignment
// for (let step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log('Walking east one step');
// }

// // INCREMENT: step++ --> step = step + 1;
// // DECREMENT: step-- --> step = step - 1;

// STEP-BY-STEP BREAKDOWN OF A FOR-LOOP

//            inital value | condition |  code executes        | increment initial value
// 1st iteration: step = 0 | 0 < 5 ? T | Walking east one step | step --> 1
// 2nd iteration: step = 1 | 1 < 5 ? T | Walking east one step | step --> 2
// 3rd iteration: step = 2 | 2 < 5 ? T | Walking east one step | step --> 3
// 4th iteration: step = 3 | 3 < 5 ? T | Walking east one step | step --> 4
// 5th iteration: step = 4 | 4 < 5 ? T | Walking east one step | step --> 5
// 6th iteration: step = 5 | 5 < 5 ? F | LOOP BREAKS
