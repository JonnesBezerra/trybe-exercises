//  Bonus JS

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

multiply(numbers);

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[i] < numbers[j]) {
            let position = numbers[i];

            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log(`Ordered: ${numbers}`);

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[i] > numbers[j]) {
            let position = numbers[i];

            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log(`Descending order: ${numbers}`);

function multiply(numbers) {
    let newArray = [];
    
    for (let i = 0; i < numbers.length; i++) {
        if (i+1 === numbers.length) {
            newArray.push(numbers[i] * 2);
        } else {
            newArray.push(numbers[i] * numbers[i+1]);
        }
    }
    
    console.log(`New array: [${newArray}]`);

}