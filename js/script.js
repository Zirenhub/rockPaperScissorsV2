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
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    function removeStyle() {
      let colorStylePly = document.querySelectorAll('.btn-player');
      let colorStyleCom = document.querySelectorAll('.btn-computer');
      for (let i = 0; i < colorStyleCom.length; i++) {
        colorStyleCom[i].style.removeProperty('background-color');
      }
      for (let i = 0; i < colorStylePly.length; i++) {
        colorStylePly[i].style.removeProperty('background-color');
      }
    }

    function playRound() {
      console.log('Computer selected : ' + computerSelection);

      console.log('You selected : ' + playerSelection);

      let playerColor = document.getElementById(
        `player-${playerSelection}`
      );
      let computerColor = document.getElementById(
        `computer-${computerSelection}`
      );

      if (
        (computerSelection === `rock` &&
          playerSelection === `scissors`) ||
        (computerSelection === `paper` &&
          playerSelection === `rock`) ||
        (computerSelection === `scissors` &&
          playerSelection === `paper`)
      ) {
        computerColor.style.backgroundColor = '#3a86ff';
        playerColor.style.backgroundColor = 'tomato';
        console.log(
          `Computer selected ${computerSelection}. You lost.`
        );
        computerScore += 1;
      } else if (
        (playerSelection === `paper` &&
          computerSelection === `rock`) ||
        (playerSelection === `scissors` &&
          computerSelection === `paper`) ||
        (playerSelection === `rock` &&
          computerSelection === `scissors`)
      ) {
        playerColor.style.backgroundColor = '#3a86ff';
        computerColor.style.backgroundColor = 'tomato';
        console.log(
          `Computer selected ${computerSelection}. You win!`
        );
        playerScore += 1;
      } else {
        console.log("It's a tie");
      }
    }
    removeStyle();
    playRound();
  });
}
