// Named Export:

// You can export multiple variables and functions from a single file.
// When importing Named Export, the names must match the original exports and be wrapped in curly braces {}.

//Ex:

// const a = 5;
// const b = 15;

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// export { a, b, add, subtract };

// ----------------- OR ----------------

export const a = 5;
export const b = 15;

export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}
