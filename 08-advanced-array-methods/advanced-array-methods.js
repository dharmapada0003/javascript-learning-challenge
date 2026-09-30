//forEach(): It is an array method used to run a function once for every element in an array.

// It is commonly used when you want to perform an action for each element, rather than create a new array.

//Syntax:
// array.forEach(function (currentValue, index, array) {
//   // code to execute for each element
// });

// currentValue → the current element
// index → the index of the current element
// array → the original array

//Ex-1
const myNums = [10, 20, 30, 40, 50];

myNums.forEach(function (num) {
  console.log(num);
});

//Ex-2
const myMarks = [10, 20, 30, 40, 50];

myMarks.forEach((number, index) => {
  console.log(`Index: ${index} And Value: ${number}`);
});

//Ex-3
const fruits = ["apple", "banana", "orange", "grapes"];

const output = fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});

//1. map(): Creates a new array by transforming every element.

//Syntax:
// array.map(callBackfunction(value, index, array));

//Ex-1
let numbers = [2, 3, 4, 5, 6];

let doubledNumber = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledNumber);

console.log(numbers);

//Ex-2: Using Arrow Function

let nums = [2, 3, 4, 5, 6];

let doubled = nums.map((number) => {
  return number * 2;
});

console.log(doubled);

//2. filter(): Creates a new array containing only elements that satisfy a condition.

let marks = [45, 70, 89, 92, 65];

let filteredMarks = marks.filter(function (mark) {
  return mark > 80;
});

console.log(filteredMarks);

//Ex-2: Using Arrow Function

let salaries = [25000, 35000, 40000, 55000, 20000, 65000];

let filteredSalaries = salaries.filter((salary) => {
  return salary < 40000;
});

console.log(filteredSalaries);

console.log(salaries);

//3. reduce(): Performs some operations & reduces the array to a single value & returns that value.

//Syntax:
// const result = array.reduce(function (accumulator, currentValue) {
//     // logic
//     return accumulator;
// }, initialValue);

//accumulator: The accumulator stores the result from the previous iteration.
//currentValue: currentValue is the current element being processed.
//initialValue: This is the starting value of the accumulator.

//Ex-1
const myNumbers = [10, 20, 30, 40];

const total = myNumbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(total);

//Ex-2
const myArray = [2, 4, 5, 7, 8, 6];

const largestNumber = myArray.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});

console.log(largestNumber);
