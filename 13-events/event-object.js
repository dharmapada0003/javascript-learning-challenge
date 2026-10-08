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
