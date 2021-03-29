const firstClass = () => {
    return console.log('Acordando!!');
}

firstClass();

const firstClass2 = () => {
    return console.log('Bora tomar café!!');
}

firstClass2();

const firstClass3 = () => {
    return console.log('Partiu dormir!!');
}

firstClass3();

const doingThings = (thing) => {
    return thing();
}

doingThings(firstClass3);