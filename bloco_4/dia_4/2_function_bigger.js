let a = 5, b = 2;

console.log(bigger(a,b));

function bigger(a, b) {
    if (a > b) {
        return a + " é maior";
    } else if (b > a) {
        return b + " é maior";
    } else {
        return a + ' é igual ' + b;
    }
}