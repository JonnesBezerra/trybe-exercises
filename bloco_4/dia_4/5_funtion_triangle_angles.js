let a = 60;
let b = 60;
let c = 60;

console.log(triangleAngles(a,b,c));

function triangleAngles(a, b, c) {
    if ((a < 0) || (b < 0) || (c < 0)) {
        return "ERRO no ângulo";
    }

    if ((a + b + c) === 180) {
        return true;
    } else {
        return false;
    }

}
