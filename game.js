function game() {
    var userChoice = prompt("Do you choose Rock, Paper or Scissors?");
	var userChoice2 = userChoice.toLowerCase();
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "Rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
	
    if (userChoice2 === computerChoice.toLowerCase()) {
        sweetAlert("You both chose " + computerChoice + ". This game is a tie!");
    } else if (userChoice2 === "rock") {
        if (computerChoice === "Scissors") {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nRock crushes Scissors. You win!");
        } else {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nPaper covers Rock. You lose!");
        }
    } else if (userChoice2 === "paper") {
        if (computerChoice === "Rock") {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nPaper covers Rock. You win!");
        } else {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nScissors cut Paper. You lose!");
        }
    } else if (userChoice2 === "scissors") {
        if (computerChoice === "Rock") {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nRock crushes Scissors. You lose!");
        } else {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nScissors cut Paper. You win!");
        }
    } else if (userChoice2 === "lizard" || userChoice2 === "spock" || userChoice2 === "hunter" || userChoice2 === "ninja" || userChoice2 === "bear") {
		sweetAlert(userChoice + " is not a valid answer for this game. \n\nPlease choose between the valid answers for this game type.")
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
    var userChoiceLS = prompt("Do you choose Paper, Rock, Scissors, Lizard, or Spock?");
	var userChoiceLS2 = userChoiceLS.toLowerCase();
	var computerChoiceLS = Math.random();
	if (computerChoiceLS < 0.2) {
		computerChoiceLS = "Paper";
	} else if (computerChoiceLS <= 0.4) {
		computerChoiceLS = "Rock";
	} else if (computerChoiceLS <= 0.6) {
		computerChoiceLS = "Scissors";
	} else if (computerChoiceLS <= 0.8) {
		computerChoiceLS = "Lizard";
	} else {
		computerChoiceLS = "Spock";
	}
	if (userChoiceLS2 === computerChoiceLS.toLowerCase()) {
		sweetAlert("You both chose " + computerChoiceLS + ". This game is a tie!");
	} else if (userChoiceLS2 === "rock") {
		if (computerChoiceLS === "Scissors") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nRock crushes Scissors. You win!");
		} else if (computerChoiceLS === "Paper") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nPaper covers Rock. You lose!");
		} else if (computerChoiceLS === "Lizard") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nRock crushes Lizard. You win!");
		} else {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nSpock vaporizes Rock. You lose!");
		}
	} else if (userChoiceLS2 === "paper") {
		if (computerChoiceLS === "Rock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nPaper covers Rock. You win!");
		} else if (computerChoiceLS === "Scissors") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nScissors cut Paper. You lose!");
		} else if (computerChoiceLS === "Lizard") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nLizard eats Paper. You lose!");
		} else {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nPaper disproves Spock. You win!");
		}
	} else if (userChoiceLS2 === "scissors") {
		if (computerChoiceLS === "Rock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nRock crushes Scissors. You lose!");
		} else if (computerChoiceLS === "Paper"){
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nScissors cut Paper. You win!");
		} else if (computerChoiceLS === "Lizard") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nScissors decapitates Lizard. You win!");
		} else {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nSpock smashes Scissors. You lose!");
		}
	} else if (userChoiceLS2 === "lizard") {
		if (computerChoiceLS === "Paper") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nLizard eats Paper. You win!");
		} else if (computerChoiceLS === "Rock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nRock crushes Lizard. You lose!");
		} else if (computerChoiceLS === "Scissors") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nScissors decapitates Lizard. You lose!");
		} else if (computerChoiceLS === "Spock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nLizard poisons Spock. You win!");
		}
	} else if (userChoiceLS2 === "spock") {
		if (computerChoiceLS === "Paper") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nPaper disproves Spock. You lose!");
		} else if (computerChoiceLS === "Rock") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nSpock vaporizes Rock. You win!");
		} else if (computerChoiceLS === "Scissors") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nSpock smashes Scissors. You win!");
		} else if (computerChoiceLS === "Lizard") {
			sweetAlert("You chose: " + userChoiceLS + ".\nThe computer chose: " + computerChoiceLS + "\n\nLizard poisons Spock. You lose!");
		}
    } else if (userChoiceLS2 === "hunter" || userChoiceLS2 === "ninja" || userChoiceLS2 === "bear") {
		sweetAlert(userChoiceLS + " is not a valid answer for this game. \n\nPlease choose between the valid answers for this game type.")
	} else swal({
		title: "Invalid Answer", 
		text: "Since you did not choose a valid answer, you lose!",
		type: "warning",
		confirmButtonText: "I messed up! Let me choose again!",
		closeOnConfirm: false
		},
		function(isConfirm){
			if (isConfirm){
				gameLS();
			}
		});
	}

function gameNHB() {
    var userChoiceNHB = prompt("Do you choose Ninja, Hunter, or Bear?");
	var userChoiceNHB2 = userChoiceNHB.toLowerCase();
    var computerChoiceNHB = Math.random();
    if (computerChoiceNHB < 0.34) {
        computerChoiceNHB = "Ninja";
    } else if (computerChoiceNHB <= 0.67) {
        computerChoiceNHB = "Hunter";
    } else {
        computerChoiceNHB = "Bear";
    }
	
    if (userChoiceNHB2 === computerChoiceNHB.toLowerCase()) {
        sweetAlert("You both chose " + computerChoiceNHB + ". This game is a tie!");
    } else if (userChoiceNHB2 === "ninja") {
        if (computerChoiceNHB === "Bear") {
            sweetAlert("You chose: " + userChoiceNHB + ".\nThe computer chose: " + computerChoiceNHB + "\n\nBear eats Ninja. You lose!");
        } else {
            sweetAlert("You chose: " + userChoiceNHB + ".\nThe computer chose: " + computerChoiceNHB + "\n\nNinja kills Hunter. You win!");
        }
    } else if (userChoiceNHB2 === "hunter") {
        if (computerChoiceNHB === "Ninja") {
            sweetAlert("You chose: " + userChoiceNHB + ".\nThe computer chose: " + computerChoiceNHB + "\n\nNinja kills Hunter. You lose!");
        } else {
            sweetAlert("You chose: " + userChoiceNHB + ".\nThe computer chose: " + computerChoiceNHB + "\n\nHunter shoots Bear. You win!");
        }
    } else if (userChoiceNHB2 === "bear") {
        if (computerChoiceNHB === "Ninja") {
            sweetAlert("You chose: " + userChoiceNHB + ".\nThe computer chose: " + computerChoiceNHB + "\n\nBear eats Ninja. You win!");
        } else {
            sweetAlert("You chose: " + userChoiceNHB + ".\nThe computer chose: " + computerChoiceNHB + "\n\nHunter shoots Bear. You lose!");
        }
    } else if (userChoiceNHB2 === "paper" || userChoiceNHB2 === "rock" || userChoiceNHB2 === "scissors" || userChoiceNHB2 === "lizard" || userChoiceNHB2 === "spock") {
		sweetAlert(userChoiceNHB + " is not a valid answer for this game. \n\nPlease choose between the valid answers for this game type.")
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