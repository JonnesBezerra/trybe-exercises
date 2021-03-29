const check = (bet, draw) => bet === draw;

const prizeDraw = (bet, callback) => {
    const draw = Math.floor((Math.random() * 3) + 1);

    return callback(bet, draw) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(prizeDraw(3, check));