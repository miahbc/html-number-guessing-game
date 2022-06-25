console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

let answer = Math.floor(Math.random() * 100 + 1);
let guessCount = 0;
let userGuess = " ";
let response = "";


function guessingGame(e) {
    e.preventDefault();
    userGuess = Number(document.querySelector("#userGuess").value);
    // guessCount += 1
    if (userGuess == answer) {
        guessCount += 1;
        response = "Congratulations! You guessed the correct number!";
        document.querySelector("#userGuess").removeAttribute("required");
        // document.body.removeAttribute("style");
        document.querySelector("#body").style = "background-image: url('GoodJob.jpeg')"
        // document.body.style = "background-image: url('GoodJob.jpeg')"
    } else if (userGuess < answer && userGuess > 0) {
        guessCount += 1;
        response = "Too low! Try again!";
    } else if (userGuess > answer && userGuess < 101) {
        guessCount += 1;
        response = "Too high! Try again!";
    }
    else if (userGuess <= 0 || guess > 100 || typeof guess != num) {
        response = "Sorry, your guess must be a number between 1 and 100! Try again!"
    }
    document.querySelector("#guessCount").innerHTML = `Number of guesses: ${guessCount}`;
    document.querySelector("#userGuess").value = "";
    document.querySelector("#response").innerHTML = response;
}

function reset() {
    document.querySelector("#userGuess").addAttribute("required");
    answer = Math.floor(Math.random() * 100 + 1);
    guessCount = 0;
    userGuess = "";
    response = "";
    document.querySelector("#guessCount").innerHTML = 0;
    document.querySelector("#response").innerHTML = "";
    document.querySelector("#userGuess").innerHTML = "";
}