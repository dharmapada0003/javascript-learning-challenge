const price = 400;
// console.log(price);

const newPrice = new Number(200); //The new keyword is used to create an object from the Number constructor.
// console.log(newPrice);

// console.log(newPrice.toString().length);
// console.log(newPrice.toFixed(2));

const number = 392.48628;

// console.log(number.toPrecision(2)); // "1.2e+2"
// console.log(number.toPrecision(3)); // "123"
// console.log(number.toPrecision(4)); // "123.5"
// console.log(number.toPrecision(6)); // "123.456"

//toPrecision() is used to format a number to a specified number of significant digits.

const salary = 250000;

console.log(salary.toLocaleString()); //in a typical US-English environment
console.log(salary.toLocaleString("en-IN")); //in a typical IN-English environment

//toLocaleString() is used to convert a number into a string formatted according to a particular country's or region's number-formatting conventions.

// ------------------------ Maths -----------------------------------

// Math: Math object, which provides built-in properties and methods for performing mathematical operations.

// console.log(Math);

//1. Math.abs() - Absolute value

//Returns the non-negative value of a number. It removes the negative sign if there is one.

//Ex:
// console.log(Math.abs(-4)); // 4
// console.log(Math.abs(4)); // 4
// console.log(Math.abs(0)); // 0

//2.Math.round() - Round to the nearest integer

//EX:
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.2)); // 4
// console.log(Math.round(4.5)); // 5

//3. Math.ceil() - Always rounds a number up to the nearest integer.

//Ex:
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.ceil(4.9)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(-4.2)); // -4

//4. Math.floor() - Round down

// Ex:
// console.log(Math.floor(4.9)); // 4
// console.log(Math.floor(4.2)); // 4
// console.log(Math.floor(-4.2)); // -5

//5. Math.min() - Find the smallest number

//Ex:
// console.log(Math.min(4, 3, 2, 6, 6)); // 2

//6. Math.max() - Find the largest number

//Ex:
// console.log(Math.max(4, 2, 6, 9, 5)); // 9

//7. Math.random() - It is used to generate a random number between 0 (inclusive) and 1 (exclusive).

//Ex-1
// console.log(Math.random());

//Ex-2
// console.log(Math.random() * 10 + 1); //Generate a number between 1-10s

//Ex-3
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 30;
const max = 40;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //Generates a random integer between min and max (both inclusive).
