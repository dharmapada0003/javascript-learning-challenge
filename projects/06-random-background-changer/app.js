// const startBtn = document.querySelector("#start");
// const stopBtn = document.querySelector("#stop");

// let intervalId;

// startBtn.addEventListener(
//   "click",
//   function () {
//     intervalId = setInterval(function () {
//       console.log(generateRandomColor());

//       document.body.style.backgroundColor = generateRandomColor();
//     }, 1000);
//   },
//   false,
// );

// stopBtn.addEventListener(
//   "click",
//   function () {
//     clearInterval(intervalId);
//   },
//   false,
// );

const generateRandomColor = function () {
  const hexCode = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * 16)];
  }
  return color;
};

//Better Code

let intervalId;

const startChangingBgColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = generateRandomColor();
    console.log(generateRandomColor());
  }
};

const stopChangingBgColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document
  .querySelector("#start")
  .addEventListener("click", startChangingBgColor);

document.querySelector("#stop").addEventListener("click", stopChangingBgColor);
