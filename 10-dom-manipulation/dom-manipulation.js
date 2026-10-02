//DOM:
// When a browser loads an HTML page, it converts the HTML into a tree like structure called the DOM.

// JavaScript can then use the DOM to read, change, add or remove elements on the webpage.

//DOM Manipulation: DOM manipulation means using JavaScript to change the webpage.

//1. getElementById(): Selects one element by its id.

//Syntax:
document.getElementById("myId");

//Ex-1
const mainHeading = document.getElementById("main-heading");

console.log(mainHeading);

//2. getElementsByClassName(): Selects all elements having a particular class.

//Syntax:
document.getElementsByClassName("myClass");

//Ex-1
document.getElementsByClassName("btn");

//3. getElementsByTagName(): Selects elements based on their HTML tag name.

//Syntax:
document.getElementsByTagName("h2");

//4. querySelector(): In querySelector() we can pass id, class & tag name.
// It selects the first matching element & returns it.
//In this, we write class by using dot(.myClass) & id by using hash(#myId).

//a. Select by ID

//Ex-1
document.querySelector("#main-heading");

//b. Select by class

//Ex-1
document.querySelector(".para");

//c. Select by tag

//Ex-1
document.querySelector("p");

//Ex-2
document.querySelector("h1");

//d. Select a child
document.querySelector("div p");

// This selects a <p> inside a <div>.

//e. Select direct child

//Ex-1
document.querySelector("div > p");

//f. Select multiple types

//Ex-1
document.querySelector("h1, p");

//This selects the first matching <h1> or <p>.

//g. Select by attribute

//Ex-1
document.querySelector('input[type="text"]');

//6. querySelectorAll(): Selects all matching elements & returns a node list.

//Ex-1
const allParagraphs = document.querySelectorAll("p");

console.log(allParagraphs);
