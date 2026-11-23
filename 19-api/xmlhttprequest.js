//API: API (Application Programming Interface) is a way for two different software applications to communicate and share data with each other.

//XMLHttpRequest (XHR) is a JavaScript API used to send HTTP requests from a web browser to a server and receive data without reloading the entire web page.

// It is commonly used to:

// Fetch data from a server.
// Send form data to a backend.
// Retrieve JSON, XML or text responses.
// Update parts of a webpage dynamically.
// Communicate with APIs.

//------------ To send an HTTP request: -------------------

//1. Create an XMLHttpRequest object

//Ex-1
const xhr = new XMLHttpRequest();

//2. Open a URL

//Ex-1
xhr.open("GET", "https://jsonplaceholder.typicode.com/users/3", true);

//Note:
// true → Asynchronous request (default).
// false → Synchronous request.

//3. Send the request.

//Ex-1
xhr.send();

//------------ Ex-1 -----------------------

const newXhr = new XMLHttpRequest();

const url = "https://dog.ceo/api/breeds/image/random";

document.querySelector("#sendRequest").addEventListener("click", function () {
  newXhr.open("GET", url, true);

  newXhr.onload = function () {
    const data = JSON.parse(newXhr.response);

    console.log(data.message);
  };

  newXhr.send();
});

//----------- Important XMLHttpRequest methods -----------

//1. open(): Initializes an HTTP request
//2. send(): Sends the request
//3. setRequestHeader(): Sets HTTP request headers
//4. abort(): Cancels the request
//5. getResponseHeader(): Gets a particular response header
//6. getAllResponseHeaders(): Gets all response headers

//----------- Important XMLHttpRequest properties -------------

//1. readyState: Shows the current request state
//2. status: HTTP status code (200, 404, etc.)
//3. responseText: Response as text
//4. response: Response data
//5. responseType: Expected response type
//6. onload: Executes when the request completes
//7. onerror: Executes when a network error occurs

//--------- XMLHttpRequest readyState values -------------

// Value -> State ->            Meaning

//   0 ->   UNSENT -------->    Request not initialized
//   1 ->   OPENED -------->    open() called
//   2 ->   HEADERS_RECEIVED -> Response headers received
//   3 ->   LOADING ------->    Response is being downloaded
//   4 ->   DONE ---------->    Request completed

//--------- Ex-2 -------------

const newXhr2 = new XMLHttpRequest();

newXhr2.open("GET", "https://dummyjson.com/users", true);

newXhr2.onload = function () {
  // console.log(JSON.parse(newXhr2.response).users[3]);
};

newXhr2.send();

//----------- Ex-3 --------------

function sendHttpRequest(method, url, myCallBack) {
  const newXhr3 = new XMLHttpRequest();

  newXhr3.open(method, url, true);

  newXhr3.addEventListener("load", function () {
    // console.log(JSON.parse(newXhr3.response));

    myCallBack(JSON.parse(newXhr3.response));
  });

  newXhr3.send();
}

sendHttpRequest("GET", "https://dummyjson.com/users", function (data) {
  // console.log(data);
});

sendHttpRequest("GET", "https://dummyjson.com/products/4", (data) => {
  // console.log(data);
});

//----------- EX-4 --------------

function sendHttpRequestTwo(method, url, callBack) {
  const newXhr4 = new XMLHttpRequest();

  newXhr4.open(method, url, true);

  newXhr4.onload = () => {
    // console.log(newXhr4.response);

    callBack(JSON.parse(newXhr4.response));
  };

  newXhr4.send();
}

document.querySelector("#fetch-btn").addEventListener("click", () => {
  sendHttpRequestTwo("GET", "https://dummyjson.com/products", (data) => {
    const randomNumber = Math.floor(Math.random() * 30 + 1);

    // console.log(data.products[randomNumber].title);

    document.querySelector("#img").src = data.products[randomNumber].images[0];

    document.querySelector(".description").textContent =
      data.products[randomNumber].title || "No Title Found!";
  });
});

//-------------- Callback Hell ------------------

// Callback Hell is a situation in JavaScript where multiple asynchronous callbacks are nested inside one another, resulting in deeply nested code that is difficult to read, debug and maintain.

// It can be avoided using named functions, Promises and Async/Await.

//---------- Ex-1 -----------

function sendHttpRequestThree(method, url, callback) {
  const newXhr5 = new XMLHttpRequest();

  newXhr5.responseType = "json";

  newXhr5.open(method, url, true);

  newXhr5.addEventListener("load", function () {
    callback(newXhr5.response);
  });

  newXhr5.send();
}

sendHttpRequestThree("GET", "https://dummyjson.com/users", (usersData) => {
  // console.log(usersData.users[1].id);
  console.log(usersData);

  sendHttpRequestThree(
    "GET",
    `https://dummyjson.com/users/${usersData.users[1].id}/posts`,
    (postData) => {
      // console.log(postData.posts[1].id);
      console.log(postData);

      sendHttpRequestThree(
        "GET",
        `https://dummyjson.com/comments/post/${postData.posts[1].id}`,
        (commentsData) => {
          // console.log(commentsData.comments[0].user.id);
          console.log(commentsData);

          sendHttpRequestThree(
            "GET",
            `https://dummyjson.com/users/${commentsData.comments[0].user.id}`,
            (user) => {
              console.log(user);
            },
          );
        },
      );
    },
  );
});

//------------ fixing Callback Hell ---------------

function sendHttpRequestFour(method, url) {
  const newXhr6 = new XMLHttpRequest();

  newXhr6.responseType = "json";

  newXhr6.open(method, url, true);

  const newPromise = new Promise(function (resolve, reject) {
    newXhr6.onload = function () {
      resolve(newXhr6.response);
    };

    newXhr6.onerror = function () {
      reject("Request Failed!");
    };
  });

  newXhr6.send();

  return newPromise;
}

// sendHttpRequestFour("GET", "https://dummyjson.com/users")
//   .then((usersData) => {
//     console.log(usersData);

//     return sendHttpRequestFour(
//       "GET",
//       `https://dummyjson.com/users/${usersData.users[1].id}/posts`,
//     );
//   })
//   .then((postData) => {
//     console.log(postData);

//     return sendHttpRequestFour(
//       "GET",
//       `https://dummyjson.com/comments/post/${postData.posts[1].id}`,
//     );
//   })
//   .then((commentsData) => {
//     console.log(commentsData);

//     return sendHttpRequestFour(
//       "GET",
//       `https://dummyjson.com/users/${commentsData.comments[0].user.id}`,
//     );
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//-------- In Short ------------

sendHttpRequestFour("GET", "https://dummyjson.com/users")
  .then((usersData) =>
    sendHttpRequestFour(
      "GET",
      `https://dummyjson.com/users/${usersData.users[1].id}/posts`,
    ),
  )
  .then((postData) =>
    sendHttpRequestFour(
      "GET",
      `https://dummyjson.com/comments/post/${postData.posts[1].id}`,
    ),
  )
  .then((commentsData) =>
    sendHttpRequestFour(
      "GET",
      `https://dummyjson.com/users/${commentsData.comments[0].user.id}`,
    ),
  )
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
