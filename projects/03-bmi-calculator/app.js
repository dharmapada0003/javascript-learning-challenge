const form = document.querySelector("form");
const result = document.querySelector("#result");
const yourRange = document.querySelector("#yourRange");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let bmiResult;

  const weight = Number(document.querySelector("#weight").value);
  const height = Number(document.querySelector("#height").value);

  if (weight === " " || weight <= 0 || isNaN(weight)) {
    alert("Please enter a valid weight!");
  } else if (height === " " || height <= 0 || isNaN(height)) {
    alert("Please enter a valid height!");
  } else {
    bmiResult = ((weight * 10000) / (height * height)).toFixed(2);
    console.log(bmiResult);
    result.innerText = bmiResult;
  }

  if (bmiResult < 18.6) {
    yourRange.innerHTML = `You are under <b>under weight.</b>`;
  } else if (bmiResult > 18.6 && bmiResult < 24.9) {
    yourRange.innerHTML = `You are under a <b>normal range.</b>`;
  } else if (bmiResult > 24.9) {
    yourRange.innerHTML = `You are under <b>over weight.</b>`;
  }
});
