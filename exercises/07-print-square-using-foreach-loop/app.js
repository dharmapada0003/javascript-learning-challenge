let numbers = [2, 3, 4, 5, 6];

numbers.forEach((number) => {
  console.log(number * 2);
});

//Using callBack

let nums = [7, 8, 9, 10, 11];

const result = (num) => {
  console.log(num * num);
};

nums.forEach(result);
