let a = 60;
let b = 60;
let c = 60;
let triangle = a + b + c;

if (triangle === 180) {
    console.log(true);
} else {
    console.log(false);
}

if ((a < 0) || (b < 0) || (c < 0)) {
    console.log("ERRO no ângulo");
}