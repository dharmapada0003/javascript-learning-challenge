let gussedNumber = Number(prompt("Enter a number:"));

while (gussedNumber % 5 !== 0) {
  gussedNumber = Number(
    prompt("Number is not a multiple of 5. Enter a number again:"),
  );
}

console.log(`${gussedNumber} is multiple of 5.`);
