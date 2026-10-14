const clockDiv = document.querySelector(".clockDiv");

setInterval(() => {
  let time = new Date();

  console.log(time.toLocaleTimeString());

  clockDiv.innerText = time.toLocaleTimeString();
}, 1000);

//Concepts Learned:

// 1. Date():

// Date() is used to work with dates and times.

// It tells about current date and time, create specific dates and extract parts like the year, month and day.

//Calling Date() as a function returns the current date and time as a string.

// 2. setInterval()

// setInterval() is a function that runs a piece of code repeatedly after a fixed amount of time.

// For example, you can use it to display a message every second, create a countdown or build a digital clock.

//Syntax:

// setInterval(function () {
// run some code.
// }, delay);

// function - the code you want to execute repeatedly.
// delay - the time interval in milliseconds.
// 1000 milliseconds = 1 second.
