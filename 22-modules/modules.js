//Modules:

// Modules in JavaScript allow you to split your code into multiple files and reuse code wherever you need it.
// Instead of writing all your JavaScript code in one file, you can organize it into separate files.

//avaScript modules mainly use two keywords:

//1. export – to share variables, functions, classes, etc.
//2. import – to use exported variables, functions, classes, etc.

//To use import and export in browser JavaScript, add type="module" to your script tag.
//<script type="module" src="./modules.js"></script>

import { a, b, add, subtract } from "./namedExport.js"; //Named Export

// import sayWelcome from "./defaultExport.js"; //Default Export 1

import user from "./defaultExport.js"; //Default Export 2
import * as allModules from "./exportAll.js"; //Import Everything Using *
import {
  username as name,
  age as userAge,
  add as addition,
} from "./aliases.js"; //Importing with an alias (renaming)
import { firstName, myUserAge } from "./aliases.js"; //Exporting with an alias

import printNamaste, { myName, myAge } from "./namedAndDefaultExport.js"; //Importing Named export and Default export

import * as math from "./nameSpace.js"; //Namespace Imports
import { usersData } from "./usersData.js";

//Named Export
console.log(a);
console.log(b);
console.log(add(3, 2));
console.log(subtract(20, 10));

//Default Export 1
// console.log(sayWelcome("Baida"));

//Default Export 2
console.log(user);
console.log(user.email);

//Import Everything Using *
console.log(allModules.num1);
console.log(allModules.add(30, 40));
// console.log(allModules.sayHello("Dharmapada")); //Error

//Importing with an alias (renaming)
console.log(name);
console.log(userAge);
console.log(addition(10, 20));

//Exporting with an alias
console.log(firstName);
console.log(myUserAge);

//Importing Named export and Default export
console.log(myName);
console.log(myAge);
console.log(printNamaste("Niranjan"));

//Namespace Imports
console.log(math.a);
console.log(math.b);
console.log(math.add(20, 20));
console.log(math.subtract(50, 10));

console.log(usersData);

// --------- Dynamic Import: -----------

// Dynamic import allows you to load a JavaScript module when you actually need it.
// It uses import() and returns a Promise.

//Ex-1

async function calculate() {
  const math = await import("./namedExport.js");

  console.log(math.add(40, 20));
}

calculate();

//--------- Modules with DummyJSON API ------------

import { fetchRecipes } from "./api.js";

async function displayRecipes() {
  const data = await fetchRecipes();

  console.log(data?.recipes ?? []);
}

displayRecipes();
