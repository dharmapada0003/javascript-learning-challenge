// Singleton: Singleton means creating one object and reusing it throughout the application instead of creating multiple objects.

//Object Literals: An object literal in JavaScript is a way to create an object by using curly braces {} and defining its properties and methods directly.

//Ex-1
const student = {
  name: "Dharma",
  "full name": "Dharma Pada",
  age: 22,
  course: "JavaScript",
  address: ["Odisha", "India"],
  isLoggedIn: false,
};

console.log(student);

//----------To access object properties--------------

// Dot notation
console.log(student.name);

// Bracket notation
console.log(student["age"]);

// console.log(student.full name); //can't access like this

console.log(student["full name"]);

//-------------------------------------------

//Symbol: A Symbol is a primitive data type in JavaScript that creates a unique value.
//Symbols help avoid naming conflicts because each Symbol is unique.

//Ex-1
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false

//Even though both Symbols have the same description "id", they are different because every call to Symbol() creates a unique value.

// -------Using Symbol in an object-----------

//Ex-1
const mySymbol = Symbol("key1");

const user = {
  name: "Niranjan",
  age: 23,
  [mySymbol]: "Hello",
};

console.log(user.name); // Niranjan
console.log(user[mySymbol]); // Hello

//Imp: Use square brackets [mySymbol] when defining a Symbol property. Writing mySymbol: "Hello" would create a normal string key instead.

// -------Using Function in an object-----------

//Ex-1
const myUser = {
  userName: "dharma23",
  pass: 359629,
  gender: "male",
};

myUser.message = function () {
  console.log("Hello myUser!");
};

console.log(myUser.message());

myUser.message2 = function () {
  console.log(`Welcome! You, ${myUser.userName} logged in succesfully.`);
  console.log(`Welcome! You, ${this.userName} logged in succesfully.`);
};

myUser.message2();

//Ex-2
const myUser2 = {
  userName: "pushparani23",
  pass: 845729,
  gender: "female",
  greeting: function () {
    console.log(`Welcome ${this.userName}!`);
  },
};

//-----------The function can also be defined like this-----------

// const myUser2 = {
//   userName: "pushparani23",

//   greeting() {
//     console.log(`Welcome ${this.userName}!`);
//   },
// };

console.log(myUser2.greeting());
