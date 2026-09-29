//Functions: A function is a reusable block of code that performs a specific task.

//1. Function Declaration
//Syntax: Do not depent on inputs

function functionName() {
  //performs some tasks
}

//Ex-1
function greet() {
  console.log("Hello!");
}

greet(); //Function Call or Invoke

//Ex-2
function myFunction() {
  console.log("I am Dharmapada.");
  console.log("I love coding");
}

myFunction();

//2. Function with Parameters: Means, parameters allow to pass data into a function.

//Syntax: Depends on inputs

function functionName(parameter1, parameter2) {
  //performs some tasks
}

//Ex-1
function message(name) {
  console.log("Hello, " + name);
}

message("Dharmapada");
message("Niranjan");

//Ex-2
function sum(a, b, c) {
  console.log(a + b + c);
}

sum(10, 20, 70);

//3. Function with a Return Value: A function can return a result using return.

//Ex-1
function multiplication(a, b) {
  let Value = a * b;
  return Value;
}

let result = multiplication(5, 4);

console.log(result);

console.log(multiplication(2, 5));

//After Function return no code will be executed

//Ex-1
function substraction(a, b) {
  let Value = a - b;

  console.log("Before function return");

  return Value;

  console.log("After function return");
}

let finalResult = substraction(10, 4);

console.log(finalResult);

//4. Function Expression: Means, A function can be stored in a variable.

//Ex-1
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 5));

//a. Named Function Expression: A function expression can also have a name.

//Ex-1
const calculate = function addition(a, b) {
  return a + b;
};

console.log(calculate(10, 20));

//b. Anonymous Function Expression: Most commonly, function expressions are anonymous.

//Ex-1
const sayHello = function () {
  console.log("Hello");
};

sayHello();

//5. Arrow Function: A shorter way to write functions.

//Syntax:
const myFunctionName = (parameter1, parameter2, parameter_n) => {
  //performs some tasks
};

//Ex-1
const add = (a, b) => {
  return a + b;
};

// const add = (a, b) => a + b; //For a single expression

console.log(add(6, 3));

//Ex-2
const welcomeUser = (name) => {
  console.log("Welcome, " + name);
};

welcomeUser("Dharmapada");

//6. Default Parameters: You can provide a default value if an argument is not supplied.

//Ex-1

function showUser(user = "Guest") {
  console.log("Hello, " + user);
}

showUser(); // Hello, Guest
showUser("Akash"); // Hello, Akash

//Ex-2
const calculateArea = (length = 1, width = 1) => {
  console.log("Area:", length * width);
};

calculateArea();
calculateArea(10, 5);

//7. Callback Functions: A callback function is a function that is passed as an argument to another function and is then called by that function.

//Ex-1
function greetUser(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greetUser("Ajay", sayGoodbye);

//Ex-2: Callback with an Arrow Function

function calculateSum(a, b, callback) {
  const result = a + b;
  callback(result);
}

calculateSum(10, 20, (answer) => {
  console.log("The result is:", answer);
});
