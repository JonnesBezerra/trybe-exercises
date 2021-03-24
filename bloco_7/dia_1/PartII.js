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

// 2)
const biggestWord = phrase => {
    let wordArray = phrase.split(' ');
    let maxLength = 0;
    let biggest;

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            biggest = word;
        }
    }
    return biggest;
}

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3)
const changeString = (string) => {
    const anystring = 'Tryber x aqui!'
    return anystring.replace('x', `${string}`);
}

console.log(changeString('Ok'));

const skills = ['Programming Logic', 'HTML', 'JS', 'CSS', 'Comunication'];

// 4)
const stringFunc1 = changeString('Bebeto');

const func = (stringFunc1) => {
    let stringFinal = '';
    stringFinal += stringFunc1;
    stringFinal += ` Minhas cinco principais habilidades são:\n`;
    let i = 1;
    for (const skill of skills) {
        stringFinal += `${i++} - ${skill}\n`;
    }
    return stringFinal;
}

console.log(func(stringFunc1));