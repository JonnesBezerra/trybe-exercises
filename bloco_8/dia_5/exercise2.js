const assert = require('assert');

// escreva sum abaixo
const sum = (...rest) => {
  console.log(rest);
  return rest.reduce((result, number) => (result + number), 0);
};

// sum();

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);