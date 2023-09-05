const rpsChoices = ['rock', 'paper', 'scissors'];

// get computter choice 
// needs to be able to go pick between 3 choice at random 
const getComputerChoice = (opt) => {
   const PcRandomChoice =  Math.floor(Math.random() * opt.length);
    return rpsChoices[PcRandomChoice];
}
console.log(getComputerChoice(rpsChoices))