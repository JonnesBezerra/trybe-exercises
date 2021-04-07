const but = document.querySelector('button');
const display = document.querySelector('h1');

let clickCount = 0;

function clicks() {
    but.addEventListener('click', () => {
        display.innerHTML = ++clickCount;
    });
}

clicks();