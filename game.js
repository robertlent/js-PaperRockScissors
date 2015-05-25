function game() {
    var userChoice = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
	
    if (userChoice === computerChoice) {
        sweetAlert("You both chose " + userChoice + ". This game is a tie!");
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nRock crushes Scissors. You win!");
        } else {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nPaper covers Rock. You lose!");
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nPaper covers Rock. You win!");
        } else {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nScissors cut Paper. You lose!");
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nRock crushes Scissors. You lose!");
        } else {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nScissors cut Paper. You win!");
        }
    } else {
		swal({
		title: "Invalid Answer", 
		text: "Since you did not choose a valid answer, you lose!",
		type: "warning",
		confirmButtonText: "I messed up! Let me choose again!",
		closeOnConfirm: false
		},
		function(isConfirm){
			if (isConfirm){
				game();
			}
		});
    }
}

function gameLS() {
    var userChoiceLS = prompt("Do you choose Paper, Rock, Scissors, Lizard, or Spock?").toLowerCase();
	var computerChoiceLS = Math.random();
	if (computerChoiceLS < 0.2) {
		computerChoiceLS = "paper";
	} else if (computerChoiceLS <= 0.4) {
		computerChoiceLS = "rock";
	} else if (computerChoiceLS <= 0.6) {
		computerChoiceLS = "scissors";
	} else if (computerChoiceLS <= 0.8) {
		computerChoiceLS = "lizard";
	} else {
		computerChoiceLS = "spock";
	}
	if (userChoiceLS === computerChoiceLS) {
		sweetAlert("You both chose " + userChoiceLS + ". This game is a tie!");
	} else if (userChoiceLS === "rock") {
		if (computerChoiceLS === "scissors") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nRock crushes Scissors. You win!");
		} else if (computerChoiceLS === "paper") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nPaper covers Rock. You lose!");
		} else if (computerChoiceLS === "lizard") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nRock crushes Lizard. You win!");
		} else {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nSpock vaporizes Rock. You lose!");
		}
	} else if (userChoiceLS === "paper") {
		if (computerChoiceLS === "rock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nPaper covers Rock. You win!");
		} else if (computerChoiceLS === "scissors") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nScissors cut Paper. You lose!");
		} else if (computerChoiceLS === "lizard") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nLizard eats Paper. You lose!");
		} else {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nPaper disproves Spock. You win!");
		}
	} else if (userChoiceLS === "scissors") {
		if (computerChoiceLS === "rock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nRock crushes Scissors. You lose!");
		} else if (computerChoiceLS === "paper"){
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nScissors cut Paper. You win!");
		} else if (computerChoiceLS === "lizard") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nScissors decapitates Lizard. You win!");
		} else {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nSpock smashes Scissors. You lose!");
		}
	} else if (userChoiceLS === "lizard") {
		if (computerChoiceLS === "paper") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nLizard eats Paper. You win!");
		} else if (computerChoiceLS === "rock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nRock crushes Lizard. You lose!");
		} else if (computerChoiceLS === "scissors") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nScissors decapitates Lizard. You lose!");
		} else if (computerChoiceLS === "spock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nLizard poisons Spock. You win!");
		}
	} else if (userChoiceLS === "spock") {
		if (computerChoiceLS === "paper") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nPaper disproves Spock. You lose!");
		} else if (computerChoiceLS === "rock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nSpock vaporizes Rock. You win!");
		} else if (computerChoiceLS === "scissors") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nSpock smashes Scissors. You win!");
		} else if (computerChoiceLS === "lizard") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nLizard poisons Spock. You lose!");
		}
    } else {
		swal({
		title: "Invalid Answer", 
		text: "Since you did not choose a valid answer, you lose!",
		type: "warning",
		confirmButtonText: "I messed up! Let me choose again!",
		closeOnConfirm: false
		},
		function(isConfirm){
			if (isConfirm){
				game();
			}
		});
	}
}
