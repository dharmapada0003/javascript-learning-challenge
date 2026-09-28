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

//4. concata(): This method creates a new array by joining multiple arrays & return the result

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

//splice(startIndex, deleteCount, newElement): This method is used to add, remove and replace elements in an array

//Ex-1
let salaries = [25000, 30000, 45000, 55000, 20000, 60000];

console.log(salaries.splice(2, 2));

console.log(salaries);

//Ex-2
let countries = ["India", "USA", "Japan", "Canada", "Australia"];

console.log(countries.splice(3, 0, "China"));

console.log(countries.splice(1, 1, "Thailand"));

console.log(countries);
