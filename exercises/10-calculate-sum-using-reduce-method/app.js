let userInput = prompt("Enter a number:");

let arr = [];

for (let i = 1; i <= userInput; i++) {
  arr[i - 1] = i;
}

console.log(arr);

const sum = arr.reduce((acc, curr, pre) => {
  return acc + curr;
}, 0);

console.log("Sum = ", sum);
