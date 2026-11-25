//Optional Chaining (?.): Optional chaining is a JavaScript operator that allows you to access object properties, array elements or call functions without getting an error if the value before ?. is null or undefined.

//----------- Without optional chaining -----------

//Ex-1

const user = {
  name: "Dharmapada",
  address: {
    city: "Balasore",
  },
};

console.log(user.address.city); // Balasore

// console.log(user.company.name);
// TypeError: Cannot read properties of undefined

//----------- With optional chaining -------------

//Ex-1

const userTwo = {
  name: "Niranjan",
  address: {
    city: "Cuttack",
  },
};

console.log(userTwo?.address?.city); //Cuttack

console.log(userTwo?.company?.name); //undefined

//---------- Optional chaining with nested objects --------------

//Ex-1

const userThree = {
  name: "Ajay",
  address: {
    location: {
      country: "Bhadrak",
    },
  },
};

console.log(userThree?.address?.location?.country); //Bhadrak

console.log(userThree?.address?.contact?.phone); // undefined

//------------ Optional chaining with arrays ----------

//Ex-1

const users = [{ name: "Akash" }, { name: "Chita" }];

console.log(users?.[0]?.name); //Akash

console.log(users?.[5]?.name); // undefined

//----------- Optional chaining with functions -----------

//Ex-1

const userFour = {
  name: "John",
};

userFour.getName?.(); // No error because getName doesn't exist

// ------- Optional chaining with API data -----------

//---------- Without optional chaining ------------

//Ex-1

// const userFive = commentsData.comments[0].user.id;

// console.log(userFive);

//---------- With optional chaining ------------

//Ex-1

// const userSix = commentsData?.comments?.[0]?.user?.id;

// console.log(userSix);

//------------- Nullish Coalescing Operator (??) -----------------

//Nullish Coalescing Operator (??): The Nullish Coalescing Operator is used to provide a default value when a variable is null or undefined.

//Ex-1

let username = null;

let result = username ?? "Guest";

console.log(result); // Guest

//Ex-2

let usernameTwo = "Anirudha";

let resultTwo = usernameTwo ?? "Guest";

console.log(resultTwo); //Anirudha

//------------ Pass dynamic values using optional chaining --------------

//Ex ------------- Dynamic object property ----------

const myUser = {
  name: "Jagannath",
  email: "jagannath@example.com",
  age: 25,
};

const key = "email";

console.log(myUser?.[key]); // jagannath@example.com

//Ex: ------------- Dynamic array index -----------

const myUsers = [{ name: "Bikash" }, { name: "Radha" }, { name: "Mamata" }];

const index = 1;

console.log(myUsers?.[index]?.name); //Radha

//Ex: -------------

const myUserTwo = {
  details: {
    contact: {
      email: "radha@example.com",
    },
  },
};

const property = "email";

console.log(myUserTwo?.details?.contact?.[property]); // radha@example.com

//Ex: --------- Dynamic values with API --------------

// const postIndex = 1;

// const postId = postData?.posts?.[postIndex]?.id;

// const commentsUrl = `https://dummyjson.com/comments/post/${postId ?? 1}`;

// console.log(commentsUrl);

//Ex: --------------- Dynamic property and nullish coalescing ----------

const myUserThree = {
  name: "Jagadish",
  email: null,
};

const myKey = "email";

const myResult = myUserThree?.[myKey] ?? "Not available";

console.log(myResult); // Not available

//------- With 0, false, and empty string -----------

//Ex-1

console.log(0 ?? 100); // 0

console.log(false ?? true); // false

console.log("" ?? "Hello"); // ""

console.log(null ?? "Hello"); // Hello

console.log(undefined ?? "Hello"); // Hello

// Note:

// Because ?? only checks for null and undefined.
// It does not consider 0, false, or "" as missing values.

//-----------  Difference between || and ?? ------------

//Ex-1

let age = 0;

console.log(age || 18); // 18

console.log(age ?? 18); // 0

//Note:

// || checks for falsy values.
// ?? checks only for null and undefined.

//--------- Nullish coalescing with optional chaining ------------

//Ex-1

const userSeven = {
  name: "Khushi",
  address: null,
};

const city = userSeven?.address?.city ?? "Unknown City";

console.log(city); // Unknown City

//Ex-2

const userEight = {
  name: null,
};

const userName = userEight?.name ?? "Guest";

console.log(userName); // Guest

//Ex-3

const userNine = {
  name: undefined,
  age: 23,
  details: {
    email: null,
    address: {
      town: "Baliapal",
      city: "Balasore",
    },
  },
};

// const myUserName = userNine?.name ?? "Raja";

// const emailData = userNine?.details?.email ?? "shiba@example.com";

const userData = {
  name: userNine?.name ?? "Raja",
  email: userNine?.details?.email ?? "shiba@example.com",
};

console.log(userData);

//--------- Nullish coalescing example with API data ------------------

//Ex-1

const userTen = {
  name: "Sucharita",
  age: 0,
  email: null,
};

const name = userTen.name ?? "Guest";
const userAge = userTen.age ?? 18;
const email = userTen.email ?? "Not provided";

console.log(name); // Sucharita
console.log(userAge); // 0
console.log(email); // Not provided
