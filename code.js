function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	return ["Rock", "Paper", "Scissors"][choice];
}

function endRoundPrompt(hasWon, playerSelection, computerSelection) {
	playerSelection = `${playerSelection.toUpperCase()[0]}${playerSelection.toLowerCase().substr(1)}`;
	computerSelection = `${computerSelection.toUpperCase()[0]}${computerSelection.toLowerCase().substr(1)}`;
	if (hasWon) {
		return `You Win! ${playerSelection} beats ${computerSelection}`;
	} else {
		return `You Lose! ${computerSelection} beats ${playerSelection}`;
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	if (computerSelection === playerSelection)
		return `You Tie! Both of you played ${computerSelection}`;
	switch (playerSelection) {
		case "rock":
			return endRoundPrompt(computerSelection !== "paper", playerSelection, computerSelection);
		case "paper":
			return endRoundPrompt(computerSelection !== "scissors", playerSelection, computerSelection);
		case "scissors":
			return endRoundPrompt(computerSelection !== "rock", playerSelection, computerSelection);
	}
}

function game() {
	for (let i = 0; i < 5; ++i) {
		playerSelection = prompt("Rock, Paper, or Scissors?");
		computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
	}
}

game();