let player_score = 0;
let computer_score = 0;

let player_score_display = document.querySelector("#player_score");
let computer_score_display = document.querySelector("#computer_score");
let result_display = document.querySelector("#result");

function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	return ["Rock", "Paper", "Scissors"][choice];
}

function toTitleCase(str) {
	return `${str.toUpperCase()[0]}${str.toLowerCase().substr(1)}`;
}

function endRoundPrompt(hasWon, playerSelection, computerSelection) {
	if (hasWon) {
		player_score += 1;
		return `<span class="green">${playerSelection}</span> beats <span class="red">${computerSelection}</span>`;
	} else {
		computer_score += 1;
		return `<span class="red">${computerSelection}</span> beats <span class="green">${playerSelection}</span>`;
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = toTitleCase(playerSelection);
	computerSelection = toTitleCase(computerSelection);
	if (computerSelection === playerSelection)
		return `You Tie! Both of you played <span class="yellow">${computerSelection}</span>`;
	switch (playerSelection) {
		case "Rock":
			return endRoundPrompt(computerSelection !== "Paper", playerSelection, computerSelection);
		case "Paper":
			return endRoundPrompt(computerSelection !== "Scissors", playerSelection, computerSelection);
		case "Scissors":
			return endRoundPrompt(computerSelection !== "Rock", playerSelection, computerSelection);
	}
}

function updateScore() {
	player_score_display.innerText = `Your score: ${player_score}`;
	computer_score_display.innerText = `Computer score: ${computer_score}`;
}

function play(playerSelection) {
	result.innerHTML = playRound(playerSelection, getComputerChoice());
	updateScore();
}
