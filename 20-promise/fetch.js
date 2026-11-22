// Fetch: Fetch API in a built-in JavaScript feature used to make HTTP requests to a server and retrieve or send data asynchronously.

// The fetch() returns a Promise, so you can handle it using .then() or async/await.

// It is commonly used to communicate with APIs and handle data in JSON format.

//---------- Important Fetch API methods -----------

// fetch() – Sends an HTTP request to a server.
// response.json() – Parses the response body into JSON format.
// response.text() – Reads the response body as plain text.
// response.status – Returns the HTTP status code.
// response.statusText – Returns the HTTP status message.
// response.ok – Checks whether the response status is successful (200–299).
// response.blob() – Reads the response body as binary data.
// response.clone() – Creates a copy of the Response object.
// response.headers – Provides access to the response headers.
// response.url – Returns the URL of the response.
// response.redirected – Checks whether the response was redirected.

// ----------- Other HTTP methods -------------

// GET - Retrieve data
// POST - Send data
// PUT - Update existing data
// PATCH - Update part of data
// DELETE - Delete data

//Ex-1 -------- Fetch API using async/await ----------

async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    console.log(data[3]);
  } catch (error) {
    console.log("Error", error);
  }
}

getUserData();

//Ex-2

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();

    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("City:", user.address.city);
  } catch (error) {
    console.log(error.message);
  }
}

getUser();

//Ex-3 -------- Fetch API using Promise (.then and .catch) --------

fetch("https://catfact.ninja/fact")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

//---------- OR ----------------

fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//---------- JavaScript Error Objects -------------

//1. Error: General-purpose error. Used when something goes wrong.

// Example:
throw new Error("Unable to connect to the server");

//2. EvalError: Error related to eval() (largely legacy).

// Example:
throw new EvalError("Invalid eval operation");

//3. RangeError: Occurs when a value is outside the allowed range.

//Example:
let age = 150;

if (age > 100) {
  throw new RangeError("Age must be between 1 and 100");
}

//4. ReferenceError: Occurs when accessing a variable that is not defined.

//Example:
console.log(username);

// ReferenceError: username is not defined

//5. SyntaxError: Occurs when JavaScript encounters invalid syntax or JSON.

//Example:
JSON.parse("{name: Dharmapada}");

// SyntaxError: Invalid JSON format

//6. TypeError: Occurs when an operation is performed on an incorrect data type.

//Example:
let name = 123;

name.toUpperCase();

// TypeError: name.toUpperCase is not a function

//7. URIError: Occurs when URI encoding or decoding fails.

//Example:
decodeURIComponent("%");

// URIError: URI malformed

//8. AggregateError: Represents multiple errors together.

//Example:
const error = new AggregateError(
  [
    new Error("User API failed"),
    new Error("Product API failed"),
    new Error("Order API failed"),
  ],
  "Multiple API requests failed",
);

console.log(error.message);
console.log(error.errors);

//9. InternalError: Engine-specific error; not standard ECMAScript.

//Example:
function recursive() {
  recursive();
}

recursive();

// Some JavaScript engines may report:
// InternalError: Too much recursion

//---------- DOMException Errors -------------

//A DOMException is a special type of error that occurs when performing operations using browser APIs (Web APIs) or the Document Object Model (DOM) that are not allowed, invalid, unsupported or unsuccessful.

//1. AbortError: Occurs when an API request or asynchronous operation is aborted.

//Example:
throw new DOMException("The API request was cancelled", "AbortError");

//2. TimeoutError: Occurs when an operation exceeds its allowed time limit.

//Example:
throw new DOMException("The operation timed out", "TimeoutError");

//3. NotAllowedError: Occurs when permission to perform an operation is denied.

//Example:
throw new DOMException(
  "Permission to access the camera was denied",
  "NotAllowedError",
);

//4. NotFoundError: Occurs when a requested resource or device cannot be found.

//Example:
throw new DOMException("The requested device was not found", "NotFoundError");

//5. NotReadableError: Occurs when a device or resource exists but cannot be accessed.

//Example:
throw new DOMException(
  "The camera is already in use or cannot be accessed",
  "NotReadableError",
);

//6. InvalidStateError: Occurs when an operation is performed on an object in an invalid state.

//Example:
throw new DOMException(
  "The object is not in a valid state",
  "InvalidStateError",
);

//7. SecurityError: Occurs when an operation violates a security restriction.

//Example:
throw new DOMException(
  "This operation is blocked for security reasons",
  "SecurityError",
);

//8. QuotaExceededError: Occurs when a storage quota or resource limit is exceeded.

//Example:
throw new DOMException("Storage quota has been exceeded", "QuotaExceededError");

//9. DataCloneError: Occurs when an object cannot be cloned or transferred.

//Example:
throw new DOMException("The object cannot be cloned", "DataCloneError");

//10. InvalidAccessError: Occurs when an invalid access operation or parameter is used.

//Example:
throw new DOMException(
  "The provided access parameter is invalid",
  "InvalidAccessError",
);

//11. NotSupportedError: Occurs when a requested operation or feature is not supported.

//Example:
throw new DOMException(
  "This feature is not supported by the browser",
  "NotSupportedError",
);

//12. SyntaxError: Occurs when a provided string or value has invalid syntax.

//Example:
throw new DOMException("The provided value has invalid syntax", "SyntaxError");

//13. InvalidCharacterError: Occurs when a string contains invalid characters for an operation.

//Example:
throw new DOMException(
  "The provided string contains invalid characters",
  "InvalidCharacterError",
);

//14. ConstraintError: Occurs when a database operation violates a constraint.

// Example:
throw new DOMException("A database constraint was violated", "ConstraintError");

// 15. TransactionInactiveError: Occurs when an operation is attempted on an inactive database transaction.

// Example:
throw new DOMException(
  "The database transaction is no longer active",
  "TransactionInactiveError",
);

// 16. ReadOnlyError: Occurs when attempting to modify data in a read-only transaction.

// Example:
throw new DOMException(
  "Cannot modify data in a read-only transaction",
  "ReadOnlyError",
);

// 17. VersionError: Occurs when a database version is incompatible with the requested operation.

// Example:
throw new DOMException(
  "The requested database version is incompatible",
  "VersionError",
);

// 18. NoModificationAllowedError: Occurs when attempting to modify an object that cannot be changed.

// Example:
throw new DOMException(
  "Modification of this object is not allowed",
  "NoModificationAllowedError",
);

// 19. OperationError: Occurs when an operation fails for an unspecified operational reason.

// Example:
throw new DOMException(
  "The requested operation could not be completed",
  "OperationError",
);

// 20. NetworkError: Occurs when a network operation fails.

// Example:
throw new DOMException(
  "A network error occurred while loading the resource",
  "NetworkError",
);

//------------ Error Properties -------------

// 1. name: Returns the name or type of the error.

// Ex-1

try {
  throw new TypeError("Invalid data type");
} catch (error) {
  console.log(error.name);
}

// Output:
// TypeError

// 2. message: Returns the error message explaining what went wrong.

//Exx-1

try {
  throw new Error("Unable to connect to the server");
} catch (error) {
  console.log(error.message);
}

// Output:
// Unable to connect to the server

//3. stack: Returns a stack trace showing where the error occurred and the function calls that led to it.

//Ex-1

try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.stack);
}

// Output (format may vary):
// Error: Something went wrong
//     at ...

//4. cause:  Stores the original error that caused the current error. Useful for understanding why another error occurred.

//Ex-1

try {
  throw new Error("Unable to fetch user details", {
    cause: new Error("Database connection failed"),
  });
} catch (error) {
  console.log(error.message);
  console.log(error.cause.message);
}

// Output:
// Unable to fetch user details
// Database connection failed

//Ex-1

try {
  throw new DOMException("The API request was cancelled", "AbortError");
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);

  if (error.name === "AbortError") {
    console.log("The request was cancelled");
  }
}

//Ex-2 (InvalidCharacterError)

try {
  document.createElement("123invalid");
} catch (error) {
  console.log(error.name); //InvalidCharacterError
  console.log(error.message);
}

//Ex-3 (NotFoundError)

const parent = document.getElementById("parent");
const child = document.getElementById("child");

try {
  parent.removeChild(document.createElement("p"));
} catch (error) {
  console.log(error.name); // NotFoundError
}

//Ex-4

const controller = new AbortController();

async function getData() {
  try {
    const response = await fetch("https://example.com/data", {
      signal: controller.signal,
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      console.log("Fetch request was cancelled!");
    } else {
      console.log("Error:", error);
    }
  }
}

getData();

// Cancel the request
controller.abort();

// controller.signal: It is a property of the AbortController object that is used to tell an operation like fetch() to listen for a cancellation request.

//controller.abort(): It is a method of AbortController that cancels an ongoing asynchronous operation, such as a fetch() request.

//------------- instanceof ---------------

//Note: In JavaScript, the instanceof operator is used to check whether an object belongs to a particular class or constructor (or inherits from its prototype).
