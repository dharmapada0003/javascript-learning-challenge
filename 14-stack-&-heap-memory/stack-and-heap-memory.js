// Stack Memory (Primitive data types) => Call by value

//Primitive values are copied when assigned to another variable.
//Helps manage function calls and their execution.

// Ex-1
let myName = "Dharmapada";

let anotherName = myName;
anotherName = "Dharma";

console.log(myName);
console.log(anotherName);

//Heap Memory (Reference/Non-primitive data types) => Call by reference

// Commonly used for objects and arrays.
// Multiple variables can refer to the same object.
//Changing an object's property through one reference affects the same object accessed through another reference.

//Ex-1
let user1 = {
  name: "Niranjan",
  age: 23,
  address: "Balasore",
};

let user2 = user1;
user2.name = "Ajay";

console.log(user1.name);
console.log(user2.name);
