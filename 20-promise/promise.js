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
// Promise.resolve() - Creates an already fulfilled Promise
// Promise.reject() - Creates an already rejected Promise

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
  }, 1000);
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

//Ex-5 ------------ Handling Errors with Promises ----------------

const newPromiseTwo = new Promise(function (resolve, reject) {
  const success = false;

  if (!success) {
    resolve("Task-5 completed!");
  } else {
    reject("Task-5 failed!");
  }
});

newPromiseTwo
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

//Ex-6 ----------- Promise with async/await ------------

const newPromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Data received!");
  }, 1000);
});

async function getData() {
  const receivedData = await newPromiseThree;

  console.log(receivedData);
}

getData();

//Ex-7

const newPromiseFour = new Promise(function (resolse, reject) {
  const error = false;

  setTimeout(function () {
    if (!error) {
      resolse({ userName: "niranjan23", age: 23, address: "Balasore" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});
// .then(function (data) {
//   console.log(data.address);
// })
// .catch(function (err) {
//   console.log(err);
// });

// ----------- OR ---------------

async function userData() {
  const result = await newPromiseFour;

  console.log(result);
}

userData();

//Promise Chaining: Promise chaining means connecting multiple .then() methods one after another to execute asynchronous operations in sequence.

//In simple words, the output of one .then() is passed to the next .then().

//Ex-8

const newPromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 1000);
})
  .then((result) => {
    console.log(result);

    return result + 5; //15
  })
  .then((result) => {
    console.log(result);

    return result * 2; //30
  })
  .then((result) => {
    console.log(resu); //Error

    return result - 5; //25
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise is either fulfilled or rejected!");
  });

//Ex-9

const newPromiseSix = new Promise(function (resolse, reject) {
  const error = false;

  setTimeout(function () {
    if (!error) {
      resolse({ userName: "akash22", age: 25, address: "Mumbai" });
    } else {
      reject("Something went wrong!");
    }
  }, 1000);
});

newPromiseSix
  .then(function (userData) {
    return userData.userName;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });

//--------- Using try...catch with async/await ----------

//In JavaScript, try...catch is used with Promises to handle errors when using async/await or .then().

//Ex-10

const newPromiseSeven = new Promise(function (resolve, reject) {
  const error = false;

  setTimeout(function () {
    if (!error) {
      resolve("Dharmapada");
    } else {
      reject("Name not found!");
    }
  }, 1000);
});

async function getName() {
  try {
    const result = await newPromiseSeven;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

getName();

//------------ How it works: ---------------

// try: Executes the Promise-based code.
// await: Waits for the Promise to settle.
// catch: Executes if the Promise rejects or an awaited operation throws an error.

//------------- Promise with async/await ------------

//Ex-11

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello JavaScript!");
    }, 1000);
  });
}

async function displayData() {
  const result = await getData();
  console.log(result);
}

displayData();
