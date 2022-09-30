const pikachu = document.getElementById('pikachu');
const pokeball = document.getElementById('pokeball');
const clouds = document.getElementById('clouds');
const bush = document.getElementById('bush');
const gameOver = document.getElementById('game-over-text');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', jump);