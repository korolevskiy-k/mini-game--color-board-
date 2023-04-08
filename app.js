const board = document.querySelector('#board');
const colors = ['e7de3c', '#ad32e1', '#159ef9', '#b55807', '#11e76a'];
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    square.addEventListener('click', () => setColor(square));
    board.append(square);
}

function setColor(el) {
    const color = getColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}
function removeColor(el) {
    el.style.background = '#1d1d1d';
    el.style.boxShadow = `0 0 2px black`;
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index];
}
