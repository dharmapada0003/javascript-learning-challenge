let input = prompt("Enter a numbers:");
console.log(input);

let newArr = [];

for (let i = 1; i <= input; i++) {
  newArr[i - 1] = i;
}
console.log(newArr);
