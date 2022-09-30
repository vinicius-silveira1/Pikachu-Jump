const pikachu = document.getElementById('pikachu');
const pokeball = document.getElementById('pokeball');
const clouds = docoment.getElementById('clouds');
const bush = docoment.getElementById('bush');
const gameOver = docoment.getElementById('game-over-text');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', jump);