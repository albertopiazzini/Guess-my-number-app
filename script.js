'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let number = Number(document.querySelector('.guess').value);
  console.log(number);

  //error insert number
  if (!number) {
    //document.querySelector('.message').textContent =
    //'❌ Insert a corret number';
    displayMessage('❌ Insert a corret number');
    // correct number
  } else if (number === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 You win';
    displayMessage('🎉 You win');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // wrong number
  } else if (number != secretNumber) {
    if (score > 1) {
      if (number != secretNumber) {
        displayMessage(number > secretNumber ? '📈 Too high' : '📉 Too slow');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        //document.querySelector('.message').textContent = '💥 You lose this game';
        displayMessage('💥 You lose this game');
        score = 0;
        document.querySelector('.score').textContent = score;
      }
    }
  }
});

// button again reset game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';

  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
