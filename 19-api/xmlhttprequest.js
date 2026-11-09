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
