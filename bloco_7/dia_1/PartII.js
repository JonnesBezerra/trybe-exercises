// 1)

const factorial = number => {
    let fact = 1;
    for (let i = 2; i <= number; i++) {
        fact *= i;
    }
    return fact
}

console.log(factorial(4));

// recusive form
const factor = number => (number > 1) ? (number * factor(number - 1)) : 1
console.log(factor(4));