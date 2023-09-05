const rpsChoices = ['rock', 'paper', 'scissors'];

// get computter choice 
// needs to be able to go pick between 3 choice at random 
const getComputerChoice = (opt) => {
    const PcRandomChoice = Math.floor(Math.random() * opt.length);
    return rpsChoices[PcRandomChoice];
}

// one game of rock paper scissors
// needs to take two parm from computer and player 
// and retuen a sting declaring the winner and why 
// needs to know the games rules 
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection  === rpsChoices[2]) {
        console.log('You Win! Rock beats Scissors')
    } else if (playerSelection === 'paper' && computerSelection === rpsChoices[0]) {
        console.log('You Win! Paper beats Rock');
    } else if (playerSelection === 'scissors' && computerSelection === rpsChoices[1]) {
        console.log('You Win! Scisscors beats Paper');
    } else if (playerSelection === 'rock' && computerSelection === rpsChoices[1]) {
        console.log('You Lose! Paper beats Rock');
    } else if (playerSelection === 'scissors' && computerSelection === rpsChoices[0]) {
        console.log('You Lose! Rock beats Scissors');
    } else if (playerSelection === 'paper' && computerSelection === rpsChoices[2]) {
        console.log('You Lose! Scisscors beats Paper');
    } else {
        console.log('Its a Tie')
    }
}