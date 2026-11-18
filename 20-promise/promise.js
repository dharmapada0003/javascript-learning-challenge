//Promise: A Promise in JavaScript is an object that tells us whether an asynchronous task will be completed successfully or fail in the future.

//-------------- Promise has 3 states ----------------

// Pending - Initial state; operation is still running.
// Fulfilled - Operation completed successfully.
// Rejected - Operation failed.

//Ex-1

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task is Complete!");

    resolve();
  }, 1000);
});

promise.then(function () {
  console.log("Promise Consumed!");
});

//------------- Important Promise methods -------------

// then() – Handles successful results.
// catch() – Handles errors.
// finally() – Executes whether fulfilled or rejected.
// Promise.all() – Waits for all promises.
// Promise.race() – Returns the first settled promise.
// Promise.allSettled() – Waits for all promises to settle.
// Promise.any() – Returns the first fulfilled promise.

//Ex-2 ------------- Without Storing in a Variable ---------------

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task-2 is Complete!");

    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise-2 Consumed!");
});

//Ex-3 ----------- Resolving a Promise with an Object --------------

const newPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task-3 is Complete!");

    resolve({ name: "Dharmapada", age: 22, email: "dharmapada@example.com" });
  }, 3000);
});

newPromise.then(function (user) {
  console.log(user);
  console.log(user.name);
  console.log(user.age);
  console.log(user.email);
});

//Ex-4 ----------- Resolving a Promise with an Array ---------------

new Promise(function (resolve, reject) {
  console.log("Async Task-4 is Complete!");

  resolve(["Apple", "Orange", "Banana", "Grapes", "Mango"]);
}).then(function (fruits) {
  console.log(fruits);
  console.log(fruits[1]);
});
