// Singleton Object: Singleton means creating one object and reusing it throughout the application instead of creating multiple objects.

//Ex-1
const newUser = new Object();

newUser.name = "Akash";
newUser.age = 23;
newUser.email = "akash23@example.com";

const newUser2 = newUser;
const newUser3 = newUser;
const newUser4 = newUser;

console.log(newUser);
console.log(newUser4);

console.log(newUser2 === newUser);
console.log(newUser3 === newUser);
console.log(newUser4 === newUser);

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

// -------Using Object within another object-----------

//Ex-1
const randomUser = {
  id: "23abc",
  details: {
    name: "Ajay",
    age: 23,
    email: "ajay23@example.com",
    address: {
      state: "odisha",
      country: "india",
    },
  },
};

console.log(randomUser);
console.log(randomUser.details.email);
console.log(randomUser.details.address);
console.log(randomUser.details.address.state);

//-----------Built-in Object methods-----------------

// 1. Object.assign(): Copies properties from one or more objects into another object.

//Ex-1
const obj1 = {
  firstName: "Kapil",
  lastName: "Kumar",
};

const obj2 = {
  age: 22,
};

const result = Object.assign(obj1, obj2);

console.log(result);

//2. Object.keys(): Returns all property names (keys) of an object in an array.

//Ex-1
const newStudent = {
  name: "Radha",
  age: 23,
  city: "Delhi",
};

console.log(Object.keys(newStudent));

//3. Object.values(): Returns all property values of an object.

const newStudent2 = {
  name: "Puja",
  age: 21,
  city: "Mumbai",
};

console.log(Object.values(newStudent2));

const newValue = Object.values(newStudent2);

for (let value of newValue) {
  console.log(value);
}

for (let key in newStudent2) {
  console.log(key);
}

//4. Object.entries(): Returns keys and values as an array of pairs.

//Ex-1
const newStudent3 = {
  name: "Rajesh",
  age: 25,
  email: "rajesh23@example.com",
};

console.log(Object.entries(newStudent3));

console.log(Object.entries(newStudent3)[1]);
console.log(Object.entries(newStudent3)[0][1]);

//5. Object.fromEntries(): Converts an array of key-value pairs into an object.

//Ex-1
const entries = [
  ["name", "Dharma"],
  ["age", 23],
  ["email", "dharma23@example.com"],
];

const output = Object.fromEntries(entries);

console.log(output);

//6. Object.freeze(): Prevents adding, deleting, or modifying existing properties of an object.

//Ex-1
const newStudent4 = {
  name: "Ashima",
  age: 27,
};

newStudent4.email = "ashima23@example.com";

Object.freeze(newStudent4); //Can't add, delete or modify from this line

newStudent4.age = 30;
newStudent4.city = "Delhi";

console.log(newStudent4);

//7. Object.seal(): Prevents adding or deleting properties, but allows modifying existing properties.

//Ex-1
const newStudent5 = {
  name: "Mamali",
  age: 25,
};

Object.seal(newStudent5);

newStudent5.age = 30;
newStudent5.city = "Mumbai";

console.log(newStudent5);

//8. hasOwnProperty(): Checks whether an object has its own property (not inherited).

//Ex-1
const newStudent6 = {
  name: "Lipun",
  age: 22,
};

console.log(newStudent6.hasOwnProperty("name"));
console.log(newStudent6.hasOwnProperty("city"));

//9. Object.hasOwn(obj, prop): Checks whether an object has a particular property of its own. (Modern approach)

//Ex-1
const newStudent7 = {
  name: "Gudu",
  age: 23,
  city: "Hydrabad",
};

console.log(Object.hasOwn(newStudent7, "name"));
console.log(Object.hasOwn(newStudent7, "email"));

//10. Object.create(): Creates a new object using another object as its prototype.

//Ex-1
const parent = {
  name: "Bhabani",
  city: "Delhi",
};

const child = Object.create(parent);

child.age = 25;
child.email = "bhabani23@example.com";

console.log(child.name); // Bhabani
console.log(child.city); // Delhi
console.log(child.age); // 25
console.log(child.email); //bhabani23@example.com

console.log(parent);

//----hasOwnProperty() V/S  Object.hasOwn()  V/S  in Operator-------

const myParent = {
  name: "Chinu",
  city: "Odisha",
};

const myChild = Object.create(myParent);

myChild.age = 25;
myChild.email = "chinu23@example.com";

console.log(myChild.hasOwnProperty("age")); // true
console.log(myChild.hasOwnProperty("name")); // false

console.log(Object.hasOwn(myChild, "city")); // false
console.log(Object.hasOwn(myChild, "email")); // true

console.log("name" in myChild); // true
console.log("age" in myChild); // true
console.log("email" in myParent); //false

// Note:

// Object.hasOwn() → Checks directly owned properties.
// hasOwnProperty() → Checks directly owned properties.
// in → Checks both own and inherited properties.

//------------Spread Operator----------------

// The Spread Operator (...) is used to expand elements of an array or properties of an object.

// It is commonly used for copying, merging and updating arrays and objects.

//Ex-1
const myObj1 = {
  name: "Dharma",
  age: 25,
};

const myObj2 = {
  city: "Odisha",
  country: "India",
};

const myResult = { ...myObj1, ...myObj2 };

console.log(myResult);

//Ex-2
const student1 = {
  name: "Sucharita",
  age: 20,
};

const newStudent1 = {
  ...student1,
  city: "Odisha",
};

console.log(newStudent1);
