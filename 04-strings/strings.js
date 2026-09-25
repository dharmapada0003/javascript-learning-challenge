//String: It is a sequence of characters used to represent text.

//Creating Strings

//1. Single Quotes (')

let myName = "Dharmapada";

//2. Double Quotes (")

let address = "Balasore";

//3. Template Literals (`): A way to embed expressions in strings.

let template = `Backticks are for template literals.`;

//String Interpolation: To create multi-line strings and embed variables or expressions directly using the ${expression} syntax.

//Ex-1
let myFriend = "Niranjan";
let hisAge = 22;

let myFrndBio = `My friend ${myFriend} is ${hisAge} years old.`;

console.log(myFrndBio);

//Ex-2
let product = {
  name: "laptop",
  price: 80000,
};

console.log(`My ${product.name} price is ${product.price} thousand rupees.`);

//String length: Returns the number of characters in the string. (str.length)

//Ex-1
let currentSeason = "autumn";

let length = currentSeason.length;
console.log(length);

//String index: Accesses a character at a specific zero-based index.

//Ex-1
let feeling = "happy"; //0:h, 1:a, 2:p, 3:p, 4:y

console.log(feeling[1]);

console.log(feeling[4]);

//String Methods: These are built-in functions to manipulate a string.

//1. str.toUpperCase(): Converts the all the string to uppercase.

//Ex-1
let fullName = "Dharmapada";
let upperCase = fullName.toUpperCase();

console.log(upperCase);

//2. str.toLowerCase(): Converts the all the string to lowercase.

//Ex-1
let bigAnimal = "ELEPHANT";
let lowerCase = bigAnimal.toLowerCase();

console.log(lowerCase);

//3. str.trim(): Removes whitespaces from both ends of the string.

//Ex-1
let message = "   I am Dharmapada    ";

console.log(message.trim());

//4. str.slice(start, end): Extracts a section of a string from start up to (but not including) end.

//ex-1
let fruit = "orange";

console.log(fruit.slice(1, 4));

//Ex-2
let num = "123456789";

console.log(num.slice(2, 7));

//5. str.split(separator, limit): Splits a string into an array of strings based on a separator.

//Ex-1
let paragraph = "I feel very happy beacuse, it is sunday today.";

console.log(paragraph.split(" "));

//Ex-2
console.log(paragraph.split(","));

//Ex-3
let fruits = "apple, banana, grapes, orange, guava";

console.log(fruits.split(",", 3));

//6. str.concat(): Used to join two strings.

//Ex-1
const str1 = "JavaScript";
const str2 = " is easy";

console.log(str1.concat(str2));

//7. str.replace(searchVal, new): Replaces the the first matching part of a string with another string or value.

//Ex-1
let text = "hello";

console.log(text.replace("l", "p"));

console.log(text.replace("h", "y"));

//8. str.replaceAll(searchVal, new): Replaces  replace all matching parts of a string with another string or value.

//Ex-1
let newText = "hello world";

console.log(newText.replaceAll("l", "y"));

//9. str.charAt(): Used to return the character at a specified index (position) in a string.

//Ex-1
let myFavFood = "Biryani";

console.log(myFavFood[0]);
console.log(myFavFood[3]);
console.log(myFavFood[6]);
