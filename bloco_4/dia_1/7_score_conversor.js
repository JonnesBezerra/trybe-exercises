let score;

if (score < 0 || score > 100) {
    console.log("Error in the score!");
} else {
    if (score >= 90) {
        console.log(`${score} -> A`);
    } else if (score < 90 && score >= 80) {
        console.log(`${score} -> B`);
    } else if (score < 80 && score >= 70) {
        console.log(`${score} -> C`);
    } else if (score < 70 && score >= 60) {
        console.log(`${score} -> D`);
    } else if (score < 60 && score >= 50) {
        console.log(`${score} -> E`);
    } else {
        console.log(`${score} -> F`);
    }
}