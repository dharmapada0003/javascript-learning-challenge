//Inline Event Handling: Writing the event directly inside the HTML element using an event attribute like onclick.

//1. onclick Event: Runs when the user clicks an element.

//2. onmouseover Event: Runs when the mouse moves over an element.

//Calling a Function: You can also call a JavaScript function.

//Ex-1
function showMessage() {
  alert("Hello Everyone!");

  console.log("Message printed!");
}

//Note:

//If we have handled our event in both inline & external JS file, the code inside the external JS file will be executed.

//If we have handled our event once, we can not handle the same event again because the old event will be over-written.
