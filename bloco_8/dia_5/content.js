/* SPREAD OPERATOR */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Maçã Verde', 'Banana', 'Kiwi', 'Melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite de Moça', 'Leite Ninho', 'Granola'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

/* ARRAY DESTRUCTURING */

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8,
  b = 6;
// Only change code below this line
[b, a] = [a, b];
console.log(a, b);

// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  // Only change code below this line
  const [arr1, arr2, ...arr] = list; // Change this line
  // Only change code above this line
  return [...arr];
}
const arr = removeFirstTwo(source);

/* DEFAULT DESTRUCTURING */

const person1 = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};
const {
  nationality
} = person1;
console.log(nationality) // undefined

const getNationality = ({ firstName, nationality }) => {
  const nation = nationality ? nationality : 'Brazilian';
  return  `${firstName} is ${nation}`;
}

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

/* OBJECT PROPERTY SHORTHAND */

// const getPosition = (latitude, longitude) => ({
//   latitude: latitude,
//   longitude: longitude});
// Tudo isso aqui-----^^^^^^
// Fica assim...
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude
});

console.log(getPosition(-19.8157, -43.9542));

/* DEFAULT PARAMETERS */

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));