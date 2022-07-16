let ballsContainer = document.querySelector(".section-ball");
let rgbColors = document.getElementById("rgb-color");
let answerText = document.getElementById("answer");
let scores = document.getElementById("score");
let scoreNumbers = parseInt(scores.innerText, 10);

function randomColors() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = "rgb" + `(${red}, ${green}, ${blue})`;
  return color;
}

function generateColors() {
  for (index = 0; index < 6; index += 1) {
    let balls = document.createElement("div");
    balls.classList.add("ball");
    balls.style.backgroundColor = randomColors();
    ballsContainer.appendChild(balls);
  }
  verifyText();
}
generateColors();

function verifyText() {
  let ballDiv = document.getElementsByClassName("ball");
  let randomNumber = Math.floor(Math.random() * (ballDiv.length - 1));
  let randomRgb = ballDiv[randomNumber].style.backgroundColor;
  rgbColors.innerText = randomRgb.split("rgb")[1];
}

ballsContainer.addEventListener("click", (event) => {
  let checkClick = window
    .getComputedStyle(event.target)
    .backgroundColor.split("rgb")[1]; //

  if (checkClick === rgbColors.innerText) {
    answerText.innerText = "Acertou!";
    scoreNumbers += 3;
    scores.innerText = scoreNumbers;
    ballsContainer.innerHTML = "";
    generateColors();
    winLose();
  } else {
    answerText.innerText = "Errou! Tente novamente!";
    scoreNumbers -= 1;
    scores.innerText = scoreNumbers;
    ballsContainer.innerHTML = "";
    generateColors();
    winLose();
  }
});
let resultado = document.getElementById("result");

function winLose() {
  
  resultado.innerHTML = "";
  if (scoreNumbers === 10 || scoreNumbers === 11 || scoreNumbers === 12) {
    resultado.classList.add("resultWin");
    resultado.innerText = "Parabéns, você ganhou!";
    alert("Parabéns, você ganhou! Clique em reiniciar e jogue novamente!");
  }
  if (scoreNumbers === -10) {
    resultado.innerHTML = "";
    resultado.classList.add("resultLose");
    resultado.innerText = "Perdeu!! Tente novamente";
    alert("Perdeu! Clique em resetar e tente novamente!");
  }
}
winLose();

function reset() {
  let ballDiv = document.getElementsByClassName("ball");
  let resetBtn = document.getElementById("reset-game");
  resetBtn.addEventListener("click", () => {
    ballsContainer.innerHTML = "";
    answerText.innerHTML = "Escolha uma cor!";
    scoreNumbers = 0;
    scores.innerText = 0;
    resultado.classList.remove("resultLose");
    resultado.classList.remove("resultWin");
    resultado.innerHTML = "";
    generateColors();
  });
}
reset();
window.onload = resultado.innerHTML = "";
