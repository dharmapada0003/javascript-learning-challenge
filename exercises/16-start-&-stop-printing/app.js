const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let intervalId;

startBtn.addEventListener(
  "click",
  function () {
    intervalId = setInterval(function () {
      console.log("Start Printing");
    }, 1000);
  },
  false,
);

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  console.log("Stop Printing");
});
