"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let messageText = document.querySelector(".message");
let scoreText = document.querySelector(".score");
let numberText = document.querySelector(".number");
let body = document.querySelector("body");

document.querySelector(".check").addEventListener("click", function () {
  let inputGuess = Number(document.querySelector(".guess").value);
  if (inputGuess) {
    if (inputGuess !== number && score > 1) {
      score--;
      scoreText.textContent = score;
      messageText.textContent = inputGuess > number ? "Too High" : "Too low";
    } else if (inputGuess === number) {
      body.style.backgroundColor = "green";
      numberText.textContent = number;
      messageText.textContent = "Bravooo";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = score;
      }
    } else {
      messageText.textContent = "You lost!";
      scoreText.textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  messageText.textContent = "Start guessing...";
  scoreText.textContent = "20";
  numberText.textContent = "?";
  body.style.backgroundColor = "#222";
});
