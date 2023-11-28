const win = [
  ["one", "two", "three"],
  ["three", "six", "nine"],
  ["nine", "eight", "seven"],
  ["seven", "four", "one"],
  ["one", "five", "nine"],
  ["seven", "five", "three"],
  ["two", "five", "eight"],
  ["four", "five", "six"],
];

const player1 = "Player 1"
const player2 = "Player 2"

const player1Selections = [];
const player2Selections = [];

const winsCount = {};
winsCount[player1] = 0;
winsCount[player2] = 0;

let currentPlayer = player1;
let nextPlayer = player2;

const playAgain = document.getElementById("playAgain");
const mainText = document.getElementById("main");
const gridItems = document.querySelectorAll(".grid-item");

function checkWin() {
  for (const arr of win) {
    const [a, b, c] = arr;
    const gridA = document.getElementById(a).innerHTML;
    const gridB = document.getElementById(b).innerHTML;
    const gridC = document.getElementById(c).innerHTML;

    if (gridA !== "" && gridA === gridB && gridA === gridC) {
      return true;
    }
  }
  return false;
}

gridItems.forEach((item) => {
  item.addEventListener("click", handleClicks = () => {
    if (item.innerHTML === "") {
      if (currentPlayer === player1) {
        item.innerHTML = "X";
      }
      else {
        item.innerHTML = "0";
      }

      if (checkWin()) {
        winsCount[currentPlayer]++;
        alert(`Player ${currentPlayer} wins!`);
        score1.innerText = `${player1} : ${winsCount[player1]}`;
        score2.innerText = `${player2} : ${winsCount[player2]}`;
      }

      const temp = nextPlayer;
      nextPlayer = currentPlayer;
      currentPlayer = temp;

      mainText.innerText = `${currentPlayer} make your pick`;
    }
  })
})

playAgain.addEventListener("click", () => {
  for (const item of gridItems) {
    item.innerHTML = "";
  }
});

