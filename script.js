// To track the results of the game.
var wins = 0;
var ties = 0;
var losses = 0;

// Game options entered by the user and computer.
var gameOptions = ["R", "P", "S"];

// Window opened for the user to select their choice in game options and end the function should they hit cancel.
var game = function () {
    var userChoice = window.prompt("Enter R, P or S:");
    if (!userChoice) {
        return;
    }
}

// This will automatically conver the user entered value to capital letters.
userChoice = userChoice.toUpperCase();

// This ensures the random number selected.
var choice = Math.floor(Math.random() * gameOptions.length);
var computerChoice = gameOptions[index];

window.alert("The computer chose " + computerChoice);

if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
} else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
) {
    wins++;
    window.alert("You win!");
} else {
    losses++;
    window.alert("You lost!");
}

window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

var replay = window.confirm("Play again?");

if (replay) {
    game();
}

playGame();