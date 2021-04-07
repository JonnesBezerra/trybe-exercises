let a = -1;

console.log(positiveNegative(a));

function positiveNegative(a) {
    if (a > 0) {
        return "positive";
    } else if (a < 0) {
        return "negative";
    } else {
        return "zero";
    }
}