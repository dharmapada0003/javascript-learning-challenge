const form = document.querySelector(".form");
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

const input = document.querySelector("#input");

const submitBtn = document.querySelector("#btn");
const guesses = document.querySelector("#guesses");
const remainingGuesses = document.querySelector("#remainingGuesses");
const lowHigh = document.querySelector("#lowHigh");

let guessedNumbers = [];
let count = 10;

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputToNumber = Number(input.value);
  console.log(inputToNumber);

  if (count !== 0) {
    if (inputToNumber <= 0 || inputToNumber > 100) {
      alert("Enter a number between 1-100.");
    } else if (isNaN(inputToNumber)) {
      alert("Enter a valid number.");
    } else {
      if (inputToNumber === randomNum) {
        alert("Congratulations!🎉You guessed the right number.");
        endGame();
      }

      //checking guessed number is high or low
      if (inputToNumber > randomNum) {
        lowHigh.innerText = "high";
      } else if (inputToNumber < randomNum) {
        lowHigh.innerText = "low";
      } else {
        lowHigh.innerText = "correct";
      }

      guessedNumbers.push(inputToNumber);

      count--;
    }
  } else {
    alert(`You are out of chance!🥹 The correct number was ${randomNum}.`);
    endGame();
  }

  remainingGuesses.innerText = count;

  guesses.innerText = guessedNumbers;

  input.value = "";
});

function endGame() {
  lowHigh.innerText = "";
  guessedNumbers = [];
  submitBtn.disabled = true;
  input.setAttribute("disabled", "true");

  const newBtn = document.createElement("button");
  newBtn.innerText = "Play Again";
  newBtn.setAttribute("id", "newBtn");
  form.append(newBtn);
  tryNewGame();
}

function tryNewGame() {
  const newGameBtn = document.querySelector("newBtn");

  newGameBtn.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * 10) + 1;
    remainingGuesses.innerText = 10;
    form.removeChild(newBtn);
    submitBtn.disabled = false;
    input.setAttribute("disabled", "false");
  });
}
