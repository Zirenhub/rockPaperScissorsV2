let options = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  let option = options[Math.floor(Math.random() * options.length)];
}

let player = prompt('Rock, Paper or Scissors?').toLowerCase();

function playerSelection(player) {
  if (player != 'rock' && player != 'paper' && player != 'scissors') {
    alert('Not a valid choice.');
  }
}

playerSelection(player);
