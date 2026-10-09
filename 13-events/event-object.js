//Event Object:

// The Event Object is an object that contains information about an event that happened.

// When an event occurs, JavaScript automatically gives you an event object, usually written as event, evt or e.

// Ex-1

let clickEventButton = document.getElementById("clickEventButton");

clickEventButton.addEventListener("click", (event) => {
  console.log(event);
});

//1. event.type Property: Returns the name of the event that occurred.

//Ex-1
clickEventButton = document.getElementById("clickEventButton");

clickEventButton.addEventListener("click", (event) => {
  console.log(event.type);
});

//b. event.target Property: Returns the element that caused the event.

//Ex-1
let targetButton = document.getElementById("targetButton");

targetButton.addEventListener("click", (event) => {
  console.log(event.target);
});

//c. event.currentTarget Property: Returns the element on which the event listener is currently running.

//Ex-1
let currentTargetButton = document.getElementById("currentTargetButton");

currentTargetButton.addEventListener("click", (event) => {
  console.log(event.currentTarget);
});

//d. event.preventDefault() Method: Prevents the browser's default action.

//For example, normally submitting a form causes the browser to reload/navigate.

// event.preventDefault() prevents that default behavior, allowing you to handle the submission yourself.

// Common uses:
//1. Form: Prevent page reload on submit.
//2. Link: Prevent navigation.
//3. Right-click: Prevent the context menu.
//4. Drag/drop: Prevent the browser's default drag/drop behavior.

//Ex-1
let preventForm = document.getElementById("preventForm");

preventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Form submission stopped!");
});

//Ex-2
let preventLink = document.getElementById("preventLink");

preventLink.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("Link will not open");
  alert("The link has been prevented from opening!");
});

//e. event.clientX Property: Returns the mouse pointer's horizontal position inside the browser window.

//Ex-1
let clientXBox = document.getElementById("clientXBox");

clientXBox.addEventListener("click", (event) => {
  console.log(event.clientX);
});

//f. event.clientY Property: Returns the mouse pointer's vertical position inside the browser window.

//Ex-1
let clientYBox = document.getElementById("clientYBox");

clientYBox.addEventListener("click", (event) => {
  console.log(event.clientY);
});

//g. event.key Property: Returns the key that the user pressed.

//Ex-1
let keyInput = document.getElementById("keyInput");

keyInput.addEventListener("keydown", (event) => {
  console.log(event.key);
});

//h. event.code Property: Returns the physical key code of the keyboard key.

let codeInput = document.getElementById("codeInput");

codeInput.addEventListener("keydown", (event) => {
  console.log(event.code);
});

//i. event.altKey Property: Returns true if the Alt key was pressed during the event.

//Ex-1
let altKeyInput = document.getElementById("altKeyInput");

altKeyInput.addEventListener("keydown", (event) => {
  console.log(event.altKey);
});

//j. event.ctrlKey Property: Returns true if the Ctrl key was pressed during the event.

//Ex-1
let ctrlKeyInput = document.getElementById("ctrlKeyInput");

ctrlKeyInput.addEventListener("keydown", (event) => {
  console.log(event.ctrlKey);
});

//k. event.shiftKey Property: Returns true if the Shift key was pressed during the event.

//Ex-1
let shiftKeyInput = document.getElementById("shiftKeyInput");

shiftKeyInput.addEventListener("keydown", function (event) {
  console.log(event.shiftKey);
});

//Event Handling Without Event Listener

//Ex-1
let myButton = document.querySelector("#myButton");

myButton.onclick = () => {
  myButton.style.backgroundColor = "aqua";
  myButton.style.color = "red";
};
