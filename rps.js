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

function game() {
    counter = 0
    playerScore = 0
    computerScore = 0
    while (counter < 5) {
        let playerSelection = prompt("Choose: \n Rock \n Paper \n Scissors")
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("You Win")) {
            playerScore++;
            counter++;
            alert(result)
            alert(`Score is: \n You: ${playerScore} \n Computer: ${computerScore}`)
        } else if (result.includes("You Lose")) {
            computerScore++;
            counter++;
            alert(result)
            alert(`Score is: \n You: ${playerScore} \n Computer: ${computerScore}`)
        } else {
            alert(result)
            alert(`Score is: \n You: ${playerScore} \n Computer: ${computerScore}`)
        }
    }
    alert(`Game over! Final score is: \n Your score: ${playerScore} \n Computer score ${computerScore}`)
}

console.log(game())