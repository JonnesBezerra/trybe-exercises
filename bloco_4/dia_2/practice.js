// Practice JS

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
    console.log(`index ${i}: ${numbers[i]}`);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`Sum = ${sum}`);

let average = (sum / numbers.length);
console.log(`Average: ${average}`);

if (average > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

let bigger = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (bigger < numbers[i]) {
        bigger = numbers[i];
    }
}
console.log(`Bigger value: ${bigger}`);

let odd = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        odd++;
    }
}

if (odd === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(`Odd amount: ${odd}`);
}

let smaller = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smaller) {
        smaller = numbers[i];
    }
}

console.log(`Smaller value: ${smaller}`);

let array = [];

for (let i = 0; i < 25; i++) {
    array.push(i);
}
console.log(`Array with FOR: ${array}`);

let division = [];

for (let i = 0; i < array.length; i++) {
    division.push(array[i] / 2);
}
console.log(`Array divided: ${division}`);
