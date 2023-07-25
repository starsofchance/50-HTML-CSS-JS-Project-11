const leftImage = document.getElementById("img1");
const rightImage = document.getElementById("img2");
const pageMassage = document.getElementById("massage");
const myBtn = document.getElementById("btn");
const winnerImage = document.getElementById("flagImage");

function changeDiceImage() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  leftImage.src = "images/Dice" + randomNumber1 + ".png";
  rightImage.src = "images/Dice" + randomNumber2 + ".png";
  if (randomNumber1 > randomNumber2) {
    pageMassage.textContent = "Player 1 Wins";
    winnerImage.src = "images/winner.png";
  } else if (randomNumber1 < randomNumber2) {
    pageMassage.textContent = "Player 2 Wins";
    winnerImage.src = "images/winner.png";
  } else if (randomNumber1 === randomNumber2) {
    pageMassage.textContent = "Its a Draw";
    winnerImage.src = "images/flag.png";
  }
}

myBtn.addEventListener("click", changeDiceImage);
