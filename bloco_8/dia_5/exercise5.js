const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([a, _, c]) => [a, _, c] = [c, _, a];

const swappedList = swap(myList);
// console.log(swappedList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);