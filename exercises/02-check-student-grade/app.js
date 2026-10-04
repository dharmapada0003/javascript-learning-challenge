let enteredMarks = Number(prompt("Enter your marks:"));

//Using Switch statement
switch (true) {
  case enteredMarks >= 90:
    console.log("You got A grade👍");
    break;
  case enteredMarks >= 80:
    console.log("You got B grade👍");
    break;
  case enteredMarks >= 70:
    console.log("You got C grade👍");
    break;
  case enteredMarks >= 60:
    console.log("You got D grade👍");
    break;
  case enteredMarks >= 30:
    console.log("You got E grade👍");
    break;
  default:
    console.log("You got F grade🥹");
}
