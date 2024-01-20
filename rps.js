// initialise counter variables
let counter = 0
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let determinator = Math.random();
    console.log(determinator)
    let rps = "";
    if (determinator <= 0.33) {
        rps = "Rock!";
    } else if (determinator <= 0.67) {
        rps = "Paper!";
    } else {
        rps = "Scissors!";
    }
    return rps;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "Scissors!") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "Paper!") {
                return "You Lose! Paper beats Rock";
        } else {
            return "Draw! Play again"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "Paper!") {
            return "You Win! Scissors beat Paper";
        } else if (computerSelection == "Rock!") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "Draw! Play again"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock!") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "Scissors!") {
            return "You Lose! Scissors beat paper";
        } else {
            return "Draw! Play again"
        }
    } else {
        return "You entered an invalid option - choose either: \n - Rock \n - Paper \n - Scissors"
    }
}

// Creating 3 buttons

let playerSelection = "";

let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');

btnRock.addEventListener('click', () => {
    playerSelection = "rock";
    console.log(playerSelection)
})
btnPaper.addEventListener('click', () => {
    playerSelection = "paper";
})
btnScissors.addEventListener('click', () => {
    playerSelection = "scissors";
})

// create an overall button listener for game

let btn = document.querySelectorAll("#btn");

btn.forEach(function(button) {
    button.addEventListener('click', game)
});

let rpsResult = document.querySelector('.rpsResult');
let scoreTally = document.querySelector('.scoreTally');

function game() {
    if (counter < 5) {
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("You Win")) {
            ++playerScore;
            ++counter;
            rpsResult.textContent = result;
            scoreTally.textContent = `Score is: \n You: ${playerScore} \n Computer: ${computerScore}`
        } else if (result.includes("You Lose")) {
            ++computerScore;
            ++counter;
            rpsResult.textContent = result;
            scoreTally.textContent = `Score is: \n You: ${playerScore} \n Computer: ${computerScore}`
        } else {
            rpsResult.textContent = result;
            scoreTally.textContent = `Score is: \n You: ${playerScore} \n Computer: ${computerScore}`
        }
        playerSelection = "";
    }

    if (computerScore == 3 || playerScore == 3) {
        playerSelection = "";
        scoreTally.textContent = `Game over! Final score is: \n Your score: ${playerScore} \n Computer score ${computerScore}`
        counter = 0;
        playerScore = 0;
        computerScore = 0;
    }
}




// function game() {
//     counter = 0
//     playerScore = 0
//     computerScore = 0
//     while (counter < 5) {
//         let playerSelection = prompt("Choose: \n Rock \n Paper \n Scissors")
//         let computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         let result = playRound(playerSelection, computerSelection);
//         if (result.includes("You Win")) {
//             playerScore++;
//             counter++;
//             alert(result)
//             alert(`Score is: \n You: ${playerScore} \n Computer: ${computerScore}`)
//         } else if (result.includes("You Lose")) {
//             computerScore++;
//             counter++;
//             alert(result)
//             alert(`Score is: \n You: ${playerScore} \n Computer: ${computerScore}`)
//         } else {
//             alert(result)
//             alert(`Score is: \n You: ${playerScore} \n Computer: ${computerScore}`)
//         }
//     }
//     alert(`Game over! Final score is: \n Your score: ${playerScore} \n Computer score ${computerScore}`)
// }

// console.log(game())