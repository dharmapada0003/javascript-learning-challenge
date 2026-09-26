let itemsPrice = [250, 645, 300, 900, 50];

let idx = 0;

for (let price of itemsPrice) {
  itemsPrice[idx] = price - (price / 100) * 10;
  idx++;
}

console.log(itemsPrice);

//Using for loop

// let itemsPrice = [250, 645, 300, 900, 50];

// for (let i = 0; i < itemsPrice.length; i++) {
//   itemsPrice[i] -= (itemsPrice[i] / 100) * 10;
// }

// console.log(itemsPrice);
