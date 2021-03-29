const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const studentScore = (feedback, answers, checker) => {
    let score = 0;
    for (let i = 0; i < feedback.length; i++) {
        score += checker(feedback[i], answers[i]);
    }
    return score;
}

const checker = (feedback, answers) => {
    if (answers === feedback) {
        return 1;
    } else if (answers === 'N.A') {
        return 0;
    } else {
        return -0.5;
    }
}

console.log(studentScore(rightAnswers, studentAnswers, checker));