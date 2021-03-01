let a = 7, b = 7, c = 7;

if ((a > b) && (a > c)) {
    console.log(a + " é maior");
} else if ((b > a) && (b > c)) {
    console.log(b + " é maior");
} else if ((c > a) && (c > b)) {
    console.log(c + ' é maior');
} else {
    console.log(a, b , c + ' são iguais');
}