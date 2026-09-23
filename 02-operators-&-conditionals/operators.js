//Operators: Operators are symbols or keywords used to perform operations on values and variables

//1. Arithmetic Operators: Used to perform mathematical calculations.
//Addition(+)
let a = 10;
let b = 5;

console.log(a + b);

//Subtraction(-)
console.log(a - b);

//Multiplication(*)
console.log(a * b);

//Division(/)
console.log(a / b);

//Remainder (Modulus): (%)
console.log(a % b);

//Exponentiation (Power): (**)
console.log(a ** b);

//Post-increment (adds 1): (++)
let c = 20;
console.log(c++); //Use value → increase
console.log(c);

//Post-decrement (subtracts 1): (--)
let d = 15;
console.log(d--); //Use value → decrease
console.log(d);

//Pre-increment (adds 1): (++)
let e = 30;
console.log(++e); //Increase → use value

//Pre-decrement (subtracts 1): (--)
let f = 40;
console.log(--f); //Decrease → use value

//2. Assignment Operators: Used to assign values to variables.
//Assignment(=)
let myName = "Dharmapada";

//Addition Assignment(+=)
let num = 10;
console.log((num += 5));

//Subtraction Assignment(-=)
let num2 = 5;
console.log((num2 -= 1));

//Multiplication Assignment(*=)
let num3 = 20;
console.log((num3 *= 2));

//Division Assignment(/=)
let x = 20;
console.log((x /= 10));

//Remainder Assignment(%=)
let y = 10;
console.log((y %= 2));

//Power Assignment(**=)
let z = 5;
console.log((z **= 3));

//3. Comparison Operators: Compare two values and return a boolean (true or false).
//Equal to(==): (checks value only, converts types automatically)
let p = "15";
console.log(p == 15);

//Strict equal to(===): (checks both value and data type)
console.log(p === 15);

//Not equal to(!=)
console.log(p != 15);

//Strict not equal to(!==): (checks value and type)
console.log(p !== 15);

//Greater than(>)
let q = 20;
console.log(q > 10);

// Less than(<)
console.log(q < 10);

//Greater than or equal to(>=)
console.log(q >= 19);

//Less than or equal to(<=)
console.log(q <= 10);

//4. Logical Operators
//Logical AND(&&): Returns true only if both operands are true.
let l = 10;
let m = 20;

console.log(l == "10" && l < m);

// Logical OR(||): Returns true if at least one operand is true.
console.log(m > l || l <= 5);

//Logical NOT(!): Inverts the boolean value (true becomes false).
console.log(!(m > l || l <= 5));

//Ternary (Conditional) Operator: Compact if-else statement
//Syntax: condition ? expressionIfTrue : expressionIfFalse
let age = 16;

let votingStatus = age >= 18 ? "Can vote" : "Can't vote";
console.log(votingStatus);
