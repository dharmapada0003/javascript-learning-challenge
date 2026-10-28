//Array Methods:

//1. Push(): Add items to the end
let fruits = ["apple", "banana", "grapes", "starapple"];

let updatedFruits = fruits.push("mango", "orange");

console.log(updatedFruits); //prints length
console.log(fruits);

//2. Pop(): Remove items from the end

let vegetables = ["potato", "onion", "carrot", "tomato", "beet"];

vegetables.pop();

console.log(vegetables);

//Note: push() & pop(): make changes in the original array

//3. toString(): Converts an array to string

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

console.log(days);

console.log(days.toString());

//4. concat(): This method creates a new array by joining multiple arrays & return the result

let ages = [18, 21, 25, 30, 35];

let marks = [85, 92, 78, 88, 95];

let numbers = ages.concat(marks);

console.log(numbers);

//Note: We can add multiple arrays like -> ages.concat(marks, days);

//5. unshift(): This method adds a new element at the starting of an array

let months = ["February", "March", "April", "May"];

months.unshift("January");

console.log(months);

//6. shift(): This method deletes an element at the starting of an array & returns it

let colors = ["Red", "Green", "Blue", "Yellow", "Black"];

console.log(colors.shift());

console.log(colors);

//Note: unshift() & shift(): make changes in the original array

//7. slice(startIndex, endIndex): This method slices out a piece of an array into a new array & returns it

let languages = ["JavaScript", "Python", "Java", "C++", "C"];

console.log(languages.slice()); //Used to copy an array

console.log(languages.slice(1, 3));

console.log(languages);

//8. splice(startIndex, deleteCount, newElement): This method is used to add, remove and replace elements in an array

//Ex-1
let salaries = [25000, 30000, 45000, 55000, 20000, 60000];

console.log(salaries.splice(2, 2));

console.log(salaries);

//Ex-2
let countries = ["India", "USA", "Japan", "Canada", "Australia"];

console.log(countries.splice(3, 0, "China"));

console.log(countries.splice(1, 1, "Thailand"));

console.log(countries);

//9. join(separator): It is used to combine all elements of an array into a single string, with an optional separator between elements.

//Ex-1 : Default separator
let arr = ["Hello", "World", "JS"];

console.log(arr.join());

//Ex-2 : Using a space as a separator
let msg = ["JavaScript", "is", "interesting!"];

console.log(msg.join(" "));

//Ex-3 : Using a hyphen
let nums = [1, 2, 3, 4];

console.log(nums.join("-"));

//Ex-4 : Joining with an empty string
let language = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

console.log(language.join(""));

//Ex-5 : Joining an array of numbers
let sum = [10, 20, 30];

let result = sum.join(" + ");

console.log(result); //Result is a string, not a number.

//Ex-6
// Special case: null, undefined and empty array slots become empty strings when joined.

console.log([1, null, undefined, 4].join("-"));

//Note: join() does not modify the original array. It returns a new string.

//10. Array.isArray(): It is used to check whether a value is an array or not. It returns true if the value is an array otherwise false.

//Ex-1
const isArr = [1, 2, 3];

console.log(Array.isArray(isArr));

//Ex-2
console.log(Array.isArray([6, 5, 3]));
console.log(Array.isArray("Hello"));
console.log(Array.isArray({ name: "Dharma" }));
console.log(Array.isArray(123));

//11. flat(depth): The array.flat() method is used to create a new array by combining nested arrays into a single array up to a specified depth.
// It does not change the original array; instead, it returns a shallow copy of the flattened array.

//Ex-1 : By default, flat() flattens one level deep.
const newArr = [1, 2, [3, 4], [5, 6]];

console.log(newArr.flat());

//Ex-2 : Flatten multiple levels with number of depth
const myNewArr = [1, [2, [3, [4]]]];

console.log(myNewArr.flat(1)); // [1, 2, [3, [4]]]

console.log(myNewArr.flat(2)); // [1, 2, 3, [4]]

console.log(myNewArr.flat(3)); // [1, 2, 3, 4]

// Note: The number passed to flat() determines how many levels are flattened.

//Ex-3 : Flatten completely with Infinity
const newArr2 = [1, [2, [3, [4, [5]]]]];

console.log(newArr2.flat(Infinity));

//Note: Use flat(Infinity) when you want to flatten an array completely, no matter how many levels of nested arrays it contains.

//Ex-4 : Removes empty slots
const newArr3 = [1, , 3, [4, , 6, 7, ,]];

console.log(newArr3.flat());

//12. flatMap(): It is used to transform each element of an array using a function and then flatten the result by one level in a single operation.

//Syntax: array.flatMap(callback)

//Ex-1
const numArr = [2, 3, 4];

const output = numArr.flatMap(function (num) {
  return [num, num * 2];
});

console.log(output);

//Ex-2
const numArr2 = [2, 3, 4, [5, 6]];

const finalOutput = numArr2.flatMap(function (x) {
  if (Array.isArray(x)) {
    return x.flatMap(function (num) {
      return num * 2;
    });
  }

  return x * 2;
});

console.log(finalOutput);

//Ex-3
const numArr3 = [2, 3, 4, [5, 6, [7, 8]]];

const finalOutput2 = numArr3.flatMap((num) => {
  if (Array.isArray(num)) {
    return num.flatMap((arr) => {
      if (Array.isArray(arr)) {
        return arr.flatMap((x) => {
          return x * 3;
        });
      }

      return arr * 3;
    });
  }

  return num * 3;
});

console.log(finalOutput2);

//Ex-4 : In a simpler way
const numArr4 = [2, 3, 4, [5, 6, [7, 8]]];

const finalOutput3 = numArr4.flat(Infinity).map(function (num) {
  return num * 3;
});

console.log(finalOutput3);

//---------map() v/s flatMap()---------------

//map() transforms each element and keeps the result in the structure returned by your function.

// flatMap() transforms each element and flattens the result by one level.

// Ex-1

//Ex-> map()
const myArr = [1, 2, 3];

const myNewResult = myArr.map(function (num) {
  return [num, num * 2];
});

console.log(myNewResult);

//Note: Each function call returns an array, so map() gives an array of arrays.

//Ex-> flatMap()
const myArr2 = [1, 2, 3];

const myNewResult2 = myArr2.flatMap(function (x) {
  return [x, x * 2];
});

console.log(myNewResult2);

//Note: flatMap() combines the elements of those returned arrays into a single array.

//Ex-2

//Ex-> map()
const myArr3 = [2, 3, 4, 5, 6];

const myNewResult3 = myArr3.map(function (a) {
  if (a % 2 === 0) {
    return [a];
  }

  return [];
});

console.log(myNewResult3);

//Ex-> flatMap()

const myArr4 = [2, 3, 4, 5, 6];

const myNewResult4 = myArr4.flatMap(function (b) {
  if (b % 2 === 0) {
    return b;
  }

  return [];
});

console.log(myNewResult4);

//13. Array.from(): It is a static method of the built-in Array object. It is used to create a new array from a string, Set or another supported iterable or array-like value.

//Ex-1 : Convert a string into an array
const myName = "Dharmapada";

const createdArr = Array.from(myName);

console.log(createdArr);
console.log(createdArr[3]);
console.log(createdArr[0]);
console.log(createdArr[8]);

//Ex-2 : Convert a Set into an array
const myNumbers = new Set([3, 2, 2, 5, 3, 4, 4]);

const myResult = Array.from(myNumbers);

console.log(myResult);

// The duplicate values are removed by the Set and Array.from() converts it into an array.

//Ex-3 : Use Array.from() with a function
const myNumbers2 = [1, 2, 3, 4];

const myResult2 = Array.from(myNumbers2, function (x) {
  return x * 2;
});

console.log(myResult2);

// Array.from() creates a new array and multiplies each element by 2. This is similar to using map().

//Ex-4 : Create an array of numbers
const myResult3 = Array.from({ length: 7 }, function (val, index) {
  return index + 1;
});

console.log(myResult3);

//val - the current element's value.

// index - the current element's index, starting at 0.

// Here, { length: 5 } tells Array.from() to create seven elements. The index starts at 0, so index + 1 produces numbers from 1 to 7.

//14. Array.of(): It  is a static method that creates a new array from the values you pass to it.

//Ex-1
const myOutput = Array.of(40, 30, 50);

console.log(myOutput);

//Ex-2
const myOutput2 = Array.of(30, "hello", true, null);

console.log(myOutput2);

//Ex-3 : Passing an array as a value
const myOutput3 = Array.of([1, 2], [3, 4]);

console.log(myOutput3);

//Note: Array.of() does not flatten the nested arrays. It keeps each array as an element.
