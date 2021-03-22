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