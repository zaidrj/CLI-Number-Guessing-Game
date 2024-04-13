#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("Guess a number between 1-10");
const randomNumber = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number 1 to 10:",
    }
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congrats! You guessed the right number.");
}
else {
    console.log("Better luck next time! You guessed a wrong number");
}
;
console.log(`The right number was: ${randomNumber}`);
