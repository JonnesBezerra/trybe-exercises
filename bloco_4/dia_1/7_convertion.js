let percentage = 200;

if ((percentage >= 90) && (percentage <= 100)) {
    percentage = 'A';
} else if ((percentage < 90) && (percentage >=80)) {
    percentage = 'B';
} else if ((percentage < 80) && (percentage >= 70)) {
    percentage = 'C';
} else if ((percentage < 70) && (percentage >= 60)) {
    percentage = 'D';
} else if ((percentage < 60) && (percentage >= 50)) {
    percentage = 'E';
} else if ((percentage < 50) && (percentage >= 0)) {
    percentage = 'F';
} else if ((percentage < 0) || (percentage > 100)) {
    percentage = 'ERRO! Invalid grades!';
}

console.log(percentage);