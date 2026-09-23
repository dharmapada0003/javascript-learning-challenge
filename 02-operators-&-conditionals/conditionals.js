//Conditional Statements: Conditional statements are used to make decisions and execute different blocks of code based on certain conditions.

//1. if statement: It allows to execute a block of code if the condition is true.
//Ex-1
let A = 5;

if (A > 0) {
  console.log("A is a positive number.");
}

//Ex-2
// let mode = "dark";
// let color;
// if (mode === "dark") {
//   color = "black";
// }

// console.log(color);

//Ex-3
let mode = "light";
let color;

if (mode === "light") {
  color = "white";
}

console.log(color);

//2. if-else statement: It checks a condition, if the condition is true, it executes the code inside the if block otherwise executes the code inside the else block.
//Ex-1
let myAge = 20;

if (myAge >= 18) {
  console.log("I am an adult");
} else {
  console.log("I am not an adult");
}

// Ex-2
let appMode = "dark";
let appColor;

if (appMode === "dark") {
  appColor = "black";
} else {
  appColor = "white";
}

console.log(appColor);

//3. else-if statement: It checks multiple conditions in a sequence, if one condition is true, the corresponding block of code is executed & the rest are skipped. If no condition is true, the else block is executed.
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B"); // This block will run
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

//4. switch statement: It is used to execute one out of many possible blocks of code based on the value of a variable.
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
