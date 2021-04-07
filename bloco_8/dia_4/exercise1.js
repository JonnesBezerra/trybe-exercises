const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const finalArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
  // console.log(finalArray);
  return finalArray;
}

// flatten();
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);