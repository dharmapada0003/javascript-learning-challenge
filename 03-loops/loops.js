//Loops: Loops are used to execute a block of code again & again based on a condition.

//1. for loop: It is used when the number of iteration is known before enter into the loop.

//syntax: for (initialization; condition; increment/decrement){Your code}
//Ex-1
for (let i = 0; i < 10; i++) {
  console.log("Dharma");
}

//Ex-2
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

//Ex-3: To find all even numbers from 0 - 100
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Ex-4: To find all odd numbers from 0 - 100
for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//2. while loop: It is used when the number of iteration is not known before & it executes code based on a condition.

//syntax: while (condition){Your code}
//Ex-1
let j = 1;

while (j <= 20) {
  console.log(j);
  j++;
}

//Ex-2
let i = 1;

while (i <= 30) {
  console.log(i, "Dharmapda");
  i++;
}

//3. do while loop: It is similar to the while loop but the code inside the do block will execute once even the condition is false initially.

//syntax: do {Your code} while (condition)
//Ex-1
let count = 1;

do {
  console.log("Dharmapada");
  count++;
} while (count > 10);

//Ex-2
let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 10);

//4. for of loop: It is used to iterate over the values of iterable objects like arrays, strings, or sets.

// Ex-1
let myName = "Dharmapada";

for (let letter of myName) {
  console.log(letter);
}

//5. for in loop: It is used to iterate over the keys (property names) of an object.

//Ex-1
let student = {
  name: "Dharmapada",
  age: 21,
  cgpa: 9,
  address: "Balasore",
};

for (let info in student) {
  console.log(info);
}

//Ex-2
for (let info in student) {
  console.log("key:", info, " value:", student[info]);
}

//6. Controlling Loop Execution

//break: Immediately exits and terminates the loop completely.

//EX-1
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

//continue: Skips the current iteration and jumps directly to the next iteration.

//Ex-1
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}
