let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  let option = options[Math.floor(Math.random() * options.length)];
  return option;
}

// function game() {
//   let round = 1;
//   for (round; round <= 5; round++) {
//     playRound();
//     console.log(`Round : ${round}`);
//     console.log(`Computer Score : ${computerScore}`);
//     console.log(`Player Score : ${playerScore}`);
//     alert(
//       `Round : ${round} \nComputer Score : ${computerScore} \nPlayer Score : ${playerScore}`
//     );
//   }
//   if ((round = 5)) {
//     if (computerScore > playerScore) {
//       alert('Computer wins!');
//     } else if (playerScore > computerScore) {
//       alert('Player wins!');
//     } else {
//       alert("It's a tie!");
//     }
//   }
// }
// game();

let playButtons = document.querySelectorAll('.btn-player');
for (let button = 0; button < playButtons.length; button++) {
  playButtons[button].addEventListener('click', function () {
    function playerPlay() {
      console.log(playButtons[button]);
      let play = playButtons[button].textContent;
      if (play === '✊') {
        return 'rock';
      } else if (play === '✋') {
        return 'paper';
      } else if (play === '✌️') {
        return 'scissors';
      }
    }
    function playRound() {
      let computerSelection = computerPlay();
      console.log('Computer selected : ' + computerSelection);

      let playerSelection = playerPlay();
      console.log('You selected : ' + playerSelection);

      if (
        (computerSelection === `rock` &&
          playerSelection === `scissors`) ||
        (computerSelection === `paper` &&
          playerSelection === `rock`) ||
        (computerSelection === `scissors` &&
          playerSelection === `paper`)
      ) {
        alert(`Computer selected ${computerSelection}. You lost.`);
        return (computerScore += 1);
      } else if (
        (playerSelection === `paper` &&
          computerSelection === `rock`) ||
        (playerSelection === `scissors` &&
          computerSelection === `paper`) ||
        (playerSelection === `rock` &&
          computerSelection === `scissors`)
      ) {
        alert(`Computer selected ${computerSelection}. You win!`);
        return (playerScore += 1);
      } else {
        alert("It's a tie");
      }
    }
    playRound();
  });
}
