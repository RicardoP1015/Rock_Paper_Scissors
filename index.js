const rpsChoices = ['rock', 'paper' ,'scissors'];
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
const cpRock = document.getElementById('cp-rock');
const cpPaper = document.getElementById('cp-paper');
const cpScissors = document.getElementById('cp-scissors');
const rpsChoicesComputer = document.querySelectorAll('.cp-choices');
let modal = document.getElementById('modal');
let resultParagraph = document.getElementById('result');
let rematchButton = document.getElementById('rematchButton');

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

const restGame = () => {
    modal.style.display = 'none';
    gamesPlayed = 0;
    playerScore = 0;
    computerScore = 0;
    updateScore('.player-score', 0);
    updateScore('.computer-score', 0);
};

rockCard.addEventListener('click', playerChooseRock);
paperCard.addEventListener('click', playerChoosePaper);
scissorsCard.addEventListener('click', playerChooseScissors);
rematchButton.addEventListener('click', restGame);

const getWinner = (computerSelection) => {
    if (playerSelection === computerSelection) return 'draw';
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        return 'player';
    }
    return 'computer';
};

const endGameMessage = (message) => {
    modal.style.display = 'flex';
    resultParagraph.textContent = message;
}

const gameDecider = () => {
    if (playerScore === 5 || computerScore === 5 || gamesPlayed === 10) {
        if (playerScore > computerScore) {
            endGameMessage(`You Win 🎉🎊Congratulations🎊🎉`);
        } else if (computerScore > playerScore){
            endGameMessage(`You Lose 😭Cowabummer!🫠`);
        } else {
            endGameMessage(`Its a Tie 🥸`);
        };
    };
};

const playerWins = (winner) => {
    if (winner === 'player') {
        playerScore++;
        updateScore('.player-score', playerScore);
    };
};

const computerWins = (winner) => {
    if (winner === 'computer') {
        computerScore++;
        updateScore('.computer-score', computerScore);
    };
};

const DrawAndRevert = (winner) => {
    if (winner === 'draw') {
        vs.textContent = 'Draw';
        setTimeout(() => {
            vs.textContent = backToVs;
        }, 1000);
    };
};

const updateScore = (score, player) => {
    let updatedScore = document.querySelector(score).textContent = player;
    return updatedScore;
};

const changeAndBack = (element) => {
    element.classList.add('show-choice');

    setTimeout(() => {
        element.classList.remove('show-choice');
    }, 700);
};

const showCpChoice = (choice) => {
    if (choice === 'rock') {
        changeAndBack(cpRock);
    } else if (choice === 'paper') {
        changeAndBack(cpPaper);
    } else if (choice === 'scissors') {
        changeAndBack(cpScissors);
    };
};

const playRound = () => {
        const computerChoice = getComputerChoice();
        const winner = getWinner(computerChoice);
        playerWins(winner);
        computerWins(winner);
        DrawAndRevert(winner);
        showCpChoice(computerChoice);
        gamesPlayed++;
        gameDecider();
    };






