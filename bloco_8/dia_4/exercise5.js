
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const foundA = (acc, curr) => {
  // console.log(curr);
  acc += curr.split('').reduce((ais, letter) => {
    if (letter === 'a' || letter === 'A') return ais+1;
    return ais;
  }, 0);
  
  // console.log(acc);
  return acc;
};

function containsA() {
  // escreva seu código aqui
  return names.reduce(foundA, 0);
}
// containsA();
assert.deepStrictEqual(containsA(), 20);