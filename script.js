"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".guesswhat").textContent="GUESS WHAT !!!";
document.querySelector(".message").textContent="🤔Start guessing what...";
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "no number😅";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Guessed right!!🎉";
    document.querySelector(".guesswhat").textContent = "YOU WON !!!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundImage = "url('won1.jpg')";
    document.querySelector(".number").style.width = "20rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "too high😉" : "too low😉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game😕	";
      document.querySelector(".score").textContent = 0;
    }
  }
  //else if(guess<secretNumber) {if (score>1){
  //  document.querySelector('.message').textContent='too low😉';
  //score--;
  //document.querySelector('.score').textContent
  //=score;}
  //else{
  //  document.querySelector('.message').textContent='you lost the game😕	';
  //}
  //}
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "🤔Start guessing what...";
  document.querySelector("body").style.backgroundImage = "url('Neon2.jpg')";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guesswhat").textContent="GUESS WHAT !!!";
});
