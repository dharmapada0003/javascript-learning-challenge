//Date object is used to work with dates and time, such as today's date, the current time or a specific date.

//1. To get the current date and time

let today = new Date();

console.log(today);

console.log(typeof today);

// Your exact output will depend on the current date, time and time zone.
// new Date() gives you the current date and time.

// 2.To get specific parts of a date

let myDate = new Date();

console.log(myDate.getFullYear()); // Year, e.g. 2026
console.log(myDate.getMonth()); // Month: 0-11
console.log(myDate.getMonth() + 1);
console.log(myDate.getDate()); // Day of month: 1-31
console.log(myDate.getDay()); // Day of week: 0-6
console.log(myDate.getHours()); // Hours: 0-23
console.log(myDate.getMinutes()); // Minutes: 0-59
console.log(myDate.getSeconds()); // Seconds: 0-59
console.log(myDate.getMilliseconds()); // Milliseconds: 0-999
console.log(myDate.getTime()); // Milliseconds since Jan 1, 1970

`${myDate.getDay()} and the time is ${myDate.getTime()}`;

//3. Methods that convert dates into strings

console.log(myDate.toString()); // Full date, time and time zone
console.log(myDate.toDateString()); //Convert a date to a readable string
console.log(myDate.toTimeString()); // Time and time zone
console.log(myDate.toLocaleDateString()); // Local date format
console.log(myDate.toLocaleTimeString()); // Local time format
console.log(myDate.toISOString()); // ISO date-time in UTC
console.log(myDate.toUTCString()); // Date and time in UTC
console.log(myDate.toJSON()); // Date as an ISO-format string

// 4. Create your own date

let myCreatedDate1 = new Date(2026, 10, 19);
console.log(myCreatedDate1);

let myCreatedDate2 = new Date(2026, 10, 19, 11, 15);
console.log(myCreatedDate2);

let myCreatedDate3 = new Date("2026-10-19");
console.log(myCreatedDate3);

let myCreatedDate4 = new Date("10-19-2026");
console.log(myCreatedDate4);
console.log(myCreatedDate4.toLocaleString());

//5. TimeStamp

let myTimeStamp = Date.now(); // Current timestamp in milliseconds

console.log(myTimeStamp); // Milliseconds since Jan 1, 1970
console.log(myCreatedDate1.getTime()); // Timestamp of myCreatedDate1 in milliseconds
console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds

// 4. Change a date

let date = new Date();

date.setFullYear(2030);

console.log(date);

// You can change the year, month, or day using setter methods.

//Note:
// setFullYear() //Change the year
// setMonth() //Change the month (0–11)
// setDate() //Change the day of the month
// setHours() //Change the hours
// setMinutes() //Change the minutes
// setSeconds() //Change the seconds
// setTime() //Set the date and time using milliseconds since January 1, 1970

// 5. Compare two dates

let date1 = new Date("2026-01-01");
let date2 = new Date("2026-12-31");

console.log(date1 < date2); // true

//6. Customize the date format

//Ex-1
let myNewDate = new Date("2026-10-19T12:00:00");

console.log(myNewDate.toLocaleDateString("en-IN"));

//Ex-2
console.log(
  myNewDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }),
);

// You can control how toLocaleDateString() displays a date.
