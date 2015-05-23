function new_game(){
	var start = prompt("Do you want to start a new game of Paper, Rock, Scissors?").toLowerCase();
	if (start === "yes"){
		game();
	} else if (start === "no"){
		sweetAlert("Maybe another time, then. Please click the 'Play' button if you change your mind. Goodbye!");
	} else {
		sweetAlert("You did not answer 'Yes' or 'No'. If you would like to play, please click the 'Play' button again and answer 'yes'.");
	}
}

function game(){
    var userChoice = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
		computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
		computerChoice = "paper";
    } else {
		computerChoice = "scissors";
    };

    if (userChoice === computerChoice) {
        sweetAlert("You both chose " + userChoice + ". This game is a tie!");
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nRock crushes Scissors. You win!");
        } else {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nPaper covers Rock. You lose!");
        }
    } else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nPaper covers Rock. You win!");
        } else {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nScissors cut Paper. You lose!");
        }
    } else if (userChoice === "scissors"){
        if (computerChoice === "rock"){
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nRock crushes Scissors. You lose!");
        } else {
            sweetAlert("You chose: " + userChoice + ".\nThe computer chose: " + computerChoice + "\n\nScissors cut Paper. You win!");
        }
    } else {
    	sweetAlert("Since you did not choose Paper, Rock, or Scissors, you lose!");
    }	
    }
