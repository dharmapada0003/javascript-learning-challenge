// Event: An event is an action that happens in the browser such as a user clicking a button, typing, submitting a form or moving the mouse.

//Types of Events in JavaScript

// 1. Mouse Events
// 2. Keyboard Events
// 3. Form Events
// 4. Clipboard Events
// 5. Touch Events

// Event Listener: It waits for an event to happen and then runs some code.

//syntax
// element.addEventListener("event", function () {
//   // code to run
// });

//1. Mouse Events: Events triggered by mouse actions.

//a. click Event: Runs when an element is clicked.

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

//e. mousedown Event: Runs when the user presses a mouse button.

//Ex-1
let mouseDownButton = document.getElementById("mouseDownButton");

mouseDownButton.addEventListener("mousedown", () => {
  alert("Mouse button pressed!");
});

//f. mouseup Event: Runs when the user releases a mouse button.

//Ex-1
let mouseUpButton = document.getElementById("mouseUpButton");

mouseUpButton.addEventListener("mouseup", () => {
  alert("Mouse button released!");
});

//g. mouseenter Event: Runs when the mouse enters an element.

//Ex-1
let mouseEnterBox = document.getElementById("mouseEnterBox");

mouseEnterBox.addEventListener("mouseenter", () => {
  mouseEnterBox.style.backgroundColor = "yellow";
});

//h. mouseleave Event: Runs when the mouse leaves an element.

//Ex-1
let mouseLeaveBox = document.getElementById("mouseLeaveBox");

mouseLeaveBox.addEventListener("mouseleave", () => {
  mouseLeaveBox.style.backgroundColor = "purple";
});

//i. mousemove Event: Runs when the mouse moves over an element.

//Ex-1
let mouseMoveBox = document.getElementById("mouseMoveBox");

mouseMoveBox.addEventListener("mousemove", () => {
  console.log("Mouse is moving!");
});

//j. contextmenu Event: Runs when the user right-clicks an element.

//EX-1
let contextMenuText = document.getElementById("contextMenuText");

contextMenuText.addEventListener("contextmenu", (evt) => {
  alert("Right click detected!");
  console.log(evt);
});

//2. Keyboard Events: Triggered when the user interacts with the keyboard.

//a. keydown Event: Runs when the user presses a keyboard key.

//Ex-1
let keyDownInput = document.getElementById("keyDownInput");

keyDownInput.addEventListener("keydown", (evt) => {
  console.log("Key pressed!");
  console.log(evt.key);
});

//b. keyup Event: Runs when the user releases a keyboard key.

//Ex-1
let keyUpInput = document.getElementById("keyUpInput");

keyUpInput.addEventListener("keyup", () => {
  console.log("Key released!");
});

//3. Form Events: Triggered when users interact with forms and form controls.

//a. input Event: Runs when the value of an input changes while typing.

//Ex-1
let inputField = document.getElementById("inputField");
let inputResult = document.getElementById("inputResult");

inputField.addEventListener("input", () => {
  console.log(inputField.value);

  inputResult.innerText = inputField.value;
});

//b. change Event: Runs when the value of a form element changes and the change is committed.

//Ex-1
let changeSelect = document.getElementById("changeSelect");

changeSelect.addEventListener("change", () => {
  console.log(changeSelect.value);

  alert("You selected " + changeSelect.value);
});

//c. submit Event: Runs when a form is submitted.

//Ex-1
let submitForm = document.getElementById("submitForm");

submitForm.addEventListener("submit", () => {
  alert("Form submitted!");
});

//d. reset Event: Runs when a form is reset.

//Ex-1
let resetForm = document.getElementById("resetForm");

resetForm.addEventListener("reset", () => {
  alert("Form reset!");
});

//e. focus Event: Runs when an element receives focus.

//Ex-1
let focusInput = document.getElementById("focusInput");

focusInput.addEventListener("focus", () => {
  focusInput.style.backgroundColor = "yellow";
});

//f. blur Event: Runs when an element loses focus.

//Ex-1
let blurInput = document.getElementById("blurInput");

blurInput.addEventListener("blur", () => {
  blurInput.style.backgroundColor = "pink";
});

//g. focusin Event: Runs when an element or its child receives focus.

//Ex-1
let focusInBox = document.getElementById("focusInBox");

focusInBox.addEventListener("focusin", () => {
  console.log("Element received focus!");
});

//h. focusout Event: Runs when an element or its child loses focus.

//Ex-1
let focusOutBox = document.getElementById("focusOutBox");

focusOutBox.addEventListener("focusout", () => {
  console.log("Element lost focus!");
});

// 4. Clipboard Events: Triggered when the user copies, cuts or pastes content.

//a. copy Event: Runs when the user copies content.

//Ex-1
let copyInput = document.getElementById("copyInput");

copyInput.addEventListener("copy", () => {
  alert("Text copied!");
});

// b. cut Event: Runs when the user cuts content.

//Ex-1
let cutInput = document.getElementById("cutInput");

cutInput.addEventListener("cut", () => {
  alert("Text cut!");
});

//c. paste Event: Runs when the user pastes content.

//Ex-1
let pasteInput = document.getElementById("pasteInput");

pasteInput.addEventListener("paste", () => {
  alert("Text pasted!");
});

//5. Touch Events: Used mainly for touch-screen devices.

//a. touchstart Event: Runs when a finger touches the screen.

//Ex-1
let touchStartButton = document.getElementById("touchStartButton");

touchStartButton.addEventListener("touchstart", () => {
  alert("Touch started!");
});

//b. touchmove Event: Runs when a finger moves on the screen.

//Ex-1
let touchMoveBox = document.getElementById("touchMoveBox");

touchMoveBox.addEventListener("touchmove", () => {
  console.log("Finger is moving!");
});

//c. touchend Event: Runs when a finger leaves the screen.

//Ex-1
let touchEndButton = document.getElementById("touchEndButton");

touchEndButton.addEventListener("touchend", () => {
  alert("Touch ended!");
});
