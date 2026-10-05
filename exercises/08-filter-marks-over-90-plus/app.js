let marks = [97, 64, 96, 32, 49, 99, 86];

const result = marks.filter((mark, idx) => {
  return mark >= 90;
});

console.log(result);
