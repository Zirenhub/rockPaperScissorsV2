function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  let option = options[Math.floor(Math.random() * options.length)];
  return option;
}

let computerSelection = computerPlay();
console.log('Computer selected : ' + computerSelection);

function playerPlay() {
  let player = prompt('Rock, Paper or Scissors?').toLowerCase();
  if (
    player !== 'rock' &&
    player !== 'paper' &&
    player !== 'scissors'
  ) {
    alert('Not a valid choice.');
  } else {
    return player;
  }
}

let playerSelection = playerPlay();
console.log('You selected : ' + playerSelection);

function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection === `rock` && playerSelection === `scissors`) ||
    (computerSelection === `paper` && playerSelection === `rock`) ||
    (computerSelection === `scissors` && playerSelection === `paper`)
  ) {
    alert(`Computer selected ${computerSelection}. You lost.`);
  } else if (
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`) ||
    (playerSelection === `rock` && computerSelection === `scissors`)
  ) {
    alert(`Computer selected ${computerSelection}. You win!`);
  } else {
    alert("It's a tie");
  }
}

playRound(playerSelection, computerSelection);
