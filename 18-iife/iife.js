// IIFE (Immediately Invoked Function Expression): In JavaScript, it is a function that is defined and executed immediately after it is created.

//An IIFE is usually executed only once because it is invoked immediately at the point where it is defined.

// Ex-1

(function () {
  console.log("Hello IIFE");
})();

//------------- Why use IIFE? ---------------

// Avoids polluting the global scope.
// Creates a private scope.
// Helps prevent variable name conflicts.
// Useful for initialization code.

//Avoids polluting the global scope: It means that variables and functions created inside an IIFE do not become accessible globally, so they do not interfere with other code.

//------------ Different ways to write IIFE -----------

//1. Using a normal function (Named IIFE)

//Ex-1

(function myIIFE() {
  console.log("Named IIFE");
})();

//Ex-2

const a = 10;
const b = 20;

(function add() {
  let sum = a + b;

  console.log(`Sum: ${sum}`);
})();

//Ex-3

(function subtraction() {
  let minus = b - a;

  console.log(`Subtraction: ${minus}`);
})();

//2. Using an arrow function

//EX-1

(() => {
  console.log("IIFE using Arrow function");
})();

//3. With parameters

//Ex-1

(function printUser(user) {
  console.log(`${user}, you logged in successfully!`);
})("Dharmapada");

//Ex-2

((age) => {
  console.log(`You are ${age} years old.`);
})(23);

//Ex-3 : Return value from the IIFE

const returnedValue = ((value) => {
  return value + value;
})(23);

console.log(returnedValue);

//---------- Can we execute an IIFE multiple times? -----------------

// Not directly by calling its original function name, because it has no name.
// However, you can return a function from an IIFE:

//----- Return a function from the IIFE -----

//Ex-1
const counter = (function () {
  let count = 0;

  return function () {
    count++;

    console.log(count);
  };
})();

// console.log(counter);

counter();
counter();
counter();

//Ex-2
const returnedFunction = (() => {
  return (num) => {
    return num * num;
  };
})();

//IIFE executes once, but the function returned by the IIFE can be called multiple times with different arguments.

console.log(returnedFunction(5));
console.log(returnedFunction(10));
console.log(returnedFunction(2));

//Shorter version:

const returnedFunction2 = (
  () => (num) =>
    num * num
)();

console.log(returnedFunction2(3));
console.log(returnedFunction2(6));

//------Note: --------

// IIFE itself executes immediately once when defined.
// A function returned by an IIFE can be called multiple times.
// Variables inside the IIFE remain private through closure.

//---------- Why do we wrap a function in parentheses? --------------

// Because parentheses make JavaScript treat the function as an expression rather than a function declaration. The final () immediately invokes that expression.
