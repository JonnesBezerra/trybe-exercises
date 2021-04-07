let candidate = 100;
let status;

if (candidate >= 80) {
    status = 'aprovada';
} else if ((candidate < 80) && (candidate >=60)) {
    status = 'lista';
} else if (candidate < 60) {
    status = 'reprovada';
}

switch (status) {
    case 'aprovada':
        console.log('aprovada');
        break;
    case 'lista':
        console.log('lista');
        break;
    case 'reprovada':
        console.log('reprovada');
        break;
    default:
        console.log('não se aplica');
        break;
}