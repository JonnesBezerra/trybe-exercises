let candidate = 20;

if (candidate >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
} else if ((candidate < 80) && (candidate >=60)) {
    console.log("Você está na lista de espera.");
} else if (candidate < 60) {
    console.log("Você foi reprovada(o)!");
}