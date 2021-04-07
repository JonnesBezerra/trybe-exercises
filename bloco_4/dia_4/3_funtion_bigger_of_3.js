let a =7, b = 7, c = 7;

console.log(bigger3(a, b, c));

function bigger3(a, b, c) {
    if ((a > b) && (a > c)) {
        return a + " é maior";
    } else if ((b > a) && (b > c)) {
        return b + " é maior";
    } else if ((c > a) && (c > b)) {
        return c + ' é maior';
    } else {
        return a, b, c + ' números são iguais';
    }
}