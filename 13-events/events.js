// Event: An event is an action that happens in the browser such as a user clicking a button, typing, submitting a form or moving the mouse.

//Types of Events in JavaScript

// 1. Mouse Events
// 2. Keyboard Events
// 3. Form Events
// 4. Clipboard Events
// 7. Touch Events

//syntax
// element.addEventListener("event", function () {
//   // code to run
// });

//1. Mouse Events: Events triggered by mouse actions.

//a. click: Runs when an element is clicked.

//Ex-1
let clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", function () {
  alert("Hello!");
});

//b. dblclick Event: Runs when you double-click an element.

//Ex-1
let doubleClickButton = document.getElementById("doubleClickButton");

doubleClickButton.addEventListener("dblclick", function () {
  alert("You double-clicked!");
});

//c. mouseover Event: Runs when you move the mouse over an element.

//Ex-1
let mouseOverHeading = document.getElementById("mouseOverHeading");

mouseOverHeading.addEventListener("mouseover", () => {
  mouseOverHeading.style.color = "red";
});

//d. mouseout Event: Runs when the mouse leaves an element.

//Ex-1
let mouseOut = document.querySelector("#mouseOut");

mouseOut.addEventListener("mouseout", () => {
  mouseOut.style.backgroundColor = "yellow";
});
