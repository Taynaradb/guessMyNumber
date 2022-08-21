'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayHighscore = function(highscore){
    document.querySelector('.highscore').textContent = highscore;
}

const changeBodyColor = function (color){
    document.querySelector('body').style.backgroundColor = color;
}

const changeWidth = function (width){
    document.querySelector('.number').style.width = width;
}

const displaySecret = function(secret){
    document.querySelector('.number').textContent = secret;
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

   //When there is no input
  if (!guess) {
    displayMessage('No number!');

    //When player wins
  } else if (guess === secretNumber) {

    if(score > highscore){
        highscore = score;
        displayHighscore(highscore);
    }else{
        highscore = highscore;
        displayHighscore(highscore);
    }

    displayMessage('Correct number');
    changeBodyColor('#60b347');
    changeWidth('30rem');
    displaySecret(secretNumber);
  
   //When guess is wrong
   }else if(guess !== secretNumber){
    if (score > 1) {
        displayMessage(guess < secretNumber ? 'Too low' : 'Too high');
        score--;
        displayScore(score);
        score;
      } else {
        displayMessage('You lost the game');
        document.querySelector('.score').textContent = 0;
      }
   }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    displayScore(score);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displaySecret('?');
    document.querySelector('.guess').value = '';
    changeBodyColor('#222');
    changeWidth('15rem');   
});