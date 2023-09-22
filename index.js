const rpsChoices = ['rock', 'paper', 'scissors'];
let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
const vs = document.querySelector('.vs');
const backToVs = vs.textContent;

const rockCard = document.getElementById('rock');
const paperCard = document.getElementById('paper');
const scissorsCard = document.getElementById('scissors');

const getComputerChoice = () => {
    const PcRandomChoice = Math.floor(Math.random() * 3);
    return computerSelection = rpsChoices[PcRandomChoice];
};

const playerChooseRock = () => {
    playerSelection = 'rock';
    playRound();
    playerSelection = null;
};

const playerChoosePaper = () => {
    playerSelection = 'paper';
    playRound();
    playerSelection = null;
};

const playerChooseScissors = () => {
    playerSelection = 'scissors';
    playRound();
    playerSelection = null;
};

rockCard.addEventListener('click', playerChooseRock);
paperCard.addEventListener('click', playerChoosePaper);
scissorsCard.addEventListener('click', playerChooseScissors);


const getWinner = (computerSelection) => {
    if (playerSelection === computerSelection) return 'draw';
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        return 'player';
    }
    return 'computer';
};

const gameDecider = () => {
    if (gamesPlayed === 5) {
        if (playerScore > computerScore) alert('You win the series!');
        else if (computerScore > playerScore) alert('Computer wins the series!');
        else alert('The series is a draw!');
        gamesPlayed = 0;
        playerScore = 0;
        computerScore = 0;
        updateScore('.player-score', 0);
        updateScore('.computer-score', 0);
    }
};

const playerWins = (winner) => {
    if (winner === 'player') {
        playerScore++;
        updateScore('.player-score', playerScore)
    };
}

const computerWins = (winner) => {
    if (winner === 'computer') {
        computerScore++;
        updateScore('.computer-score', computerScore)
    };
}

const DrawAndRevert = (winner) => {
    if (winner === 'draw') {
        vs.textContent = 'Draw';
        setTimeout(function () {
            vs.textContent = backToVs;
        }, 1000);
    }
}

const updateScore = (score, player) => {
    let updatedScore = document.querySelector(score).textContent = player;
    return updatedScore;
}

const playRound = () => {
    if (gamesPlayed < 5) {
        const computerChoice = getComputerChoice();
        const winner = getWinner(computerChoice);
        playerWins(winner)
        computerWins(winner)
        DrawAndRevert(winner)
        gamesPlayed++;
        gameDecider();
    };
};






