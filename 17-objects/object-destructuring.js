console.log("Hello World!");

//Object Destructuring: It is a feature that allows us to extract properties from an object and store them in separate variables easily using {}.

//Ex-1
const commonUser = {
  name: "Rakesh",
  age: 25,
  city: "kolkata",
};

const { name } = commonUser;
const { age, city } = commonUser;

console.log(name);
console.log(city);

//--------Destructuring with Different Variable Names---------
//We can also assign object properties to variables with different names using : .

//Ex-1

const { name: userName, age: userAge } = commonUser;

console.log(userName);
console.log(userAge);

//-------------Destructuring with Default Values--------------
//If a property does not exist, we can provide a default value.

//Ex-1
const commonUser2 = {
  fullName: "Suman Kumar",
  age: 24,
};

const { fullName, userCity = "Bhubaneswar" } = commonUser2;

console.log(fullName);
console.log(userCity);

//-----------Nested Object Destructuring-----------------------
//We can also extract properties from nested objects.

//Ex-1
const commonUser3 = {
  id: "273abc",
  commonName: "Dharma",
  address: {
    city: "Odisha",
    country: "India",
    more: {
      pin: 7384831,
    },
  },
};

const {
  address: { city: commonCity, country: commonCountry },
} = commonUser3;

console.log(commonCity);
console.log(commonCountry);

//Ex-2

const {
  address: {
    more: { pin: pinCode },
  },
} = commonUser3;

console.log(pinCode);

//Ex-3 : extract city, country & pin

const {
  address: {
    city: commonCity2,
    country: commonCountry2,
    more: { pin: pinCode2 },
  },
} = commonUser3;

console.log(commonCity2);
console.log(commonCountry2);
console.log(pinCode2);

//------------Destructuring in Function Parameters--------------
//We can directly extract object properties inside function parameters.

//Ex-1
const commonUser4 = {
  userId: "235xyz",
  userEmail: "user23@example.com",
  userPass: "User23@CoM",
};

function callUser({ userId, userEmail }) {
  console.log(`userId = ${userId}`);
  console.log(`userEmail = ${userEmail}`);
}

callUser(commonUser4);
