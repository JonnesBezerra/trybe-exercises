const correct = 'higher order function';
const USER_ANSWER = 'HIGHER ORDER FUNCTION';

const checkExam = (feedback) => (answer) => answer.toLowerCase() === feedback;


console.log(checkExam(correct)(USER_ANSWER));