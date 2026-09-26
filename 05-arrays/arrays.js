//Array: An array is a global object used to store multiple values of different data types in a single variable.

// Ex-1
let fruits = ["apple", "banana", "orange", "grapes"];

//Ex-2
let data = ["Dharmapada", 20, "Balasore", 9]; //Not recommended to store like this

//Ex-3
let marks = [86, 92, 82, 90, 80, 95];

console.log(marks.length); //To find array length

//Looping over an array

let cities = ["Balasore", "Bhadrak", "Cuttact", "Bhubaneswar", "Puri"];

//Ex-1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

//Ex-2
for (let city of cities) {
  console.log(city.toUpperCase());
}

//Ex-3
for (let city in cities) {
  console.log(cities[city]);
}
