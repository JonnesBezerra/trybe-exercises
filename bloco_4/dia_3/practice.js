// Pratice exercise 4.3

let n = 5;

if (n > 1) {
    for (let i = 0; i < n; i++) {
        for (let i = 0; i < n; i++) {
            process.stdout.write('*');
        }
        console.log();
    }
}

let manyAsterisks = 1;

if (n > 1) {
    for (let i = 0; i < n; i++) {
        for (let i = 0; i < manyAsterisks; i++) {
            process.stdout.write('*');
        }
        manyAsterisks++;
        console.log();
    }
}

let 
