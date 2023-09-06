const rpsChoices = ['rock', 'paper', 'scissors'];
// keep track of wins and loses 
let playerWins = 0;
let computerWins = 0;
// get computer choice 
// needs to be able to go pick between 3 choice at random 
const getComputerChoice = (opt) => {
    const PcRandomChoice = Math.floor(Math.random() * opt.length);
    return rpsChoices[PcRandomChoice];
}

const playerChoice = () => {
    let choice = prompt('Jan Ken Pon')
    if (!rpsChoices.includes(choice.toLowerCase())) {
        alert('Wrong Input');
        return playerChoice();
    } else {
        return choice.toLowerCase();
    }
};

// one game of rock paper scissors
// needs to take two parm from computer and player 
// and retuen a sting declaring the winner and why 
// needs to know the games rules 
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection  === rpsChoices[2]) {
        playerWins += 1;
        return 'You Win! Rock beats Scissors'; 
    } else if (playerSelection === 'paper' && computerSelection === rpsChoices[0]) {
        playerWins += 1;
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === rpsChoices[1]) {
        playerWins += 1;
        return 'You Win! Scisscors beats Paper';
    } else if (playerSelection === 'rock' && computerSelection === rpsChoices[1]) {
        computerWins += 1;
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === rpsChoices[0]) {
        computerWins += 1;
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === rpsChoices[2]) {
        computerWins += 1;
        return 'You Lose! Scisscors beats Paper';
    } else {
        return 'Its a Tie'
    }
}

// tell the winnner of the game
const gameDecider = () => {
    if (playerWins > computerWins) {
        return 'You Win!!!';
    } else if (playerWins < computerWins) {
        return 'You Lose!!! Better Luck next time';
    } else {
        return 'Tie';
    }
}

// the game has to keep trak of how man win u and computer has 
// has to play 5 times
const game = () => {
    console.log(playRound(playerChoice(), getComputerChoice(rpsChoices)));
    console.log(`Score: Player${playerWins} Computer${computerWins}`);

    console.log(playRound(playerChoice(), getComputerChoice(rpsChoices)));
    console.log(`Score: Player${playerWins} Computer${computerWins}`);

    console.log(playRound(playerChoice(), getComputerChoice(rpsChoices)));
    console.log(`Score: Player${playerWins} Computer${computerWins}`);

    console.log(playRound(playerChoice(), getComputerChoice(rpsChoices)));
    console.log(`Score: Player${playerWins} Computer${computerWins}`);

    console.log(playRound(playerChoice(), getComputerChoice(rpsChoices)));
    console.log(`Score: Player${playerWins} Computer${computerWins}`);
    return gameDecider();
}

console.log(game());