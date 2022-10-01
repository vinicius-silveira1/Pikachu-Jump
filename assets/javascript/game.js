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

// grab elements positions

const gameLoop = setInterval(() => {
    const pokeballPosition = pokeball.offsetLeft;
    const pikachuPosition = window.getComputerStyle(pikachu).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    const bushPosition = bush.offsetLeft;

    if (pokeballPosition <= 115 && pikachuPosition <= 75 && pokeballPosition > 10) {
        pokeball.style.animation = 'none';
        pokeball.style.left = `${pokeballPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        bush.style.animation = 'none';
        bush.style.left = `${bushPosition}px`;

        pikachu.src = "ed0cc7c0a1dcb68.png";
        pikachu.style.width = '200px';
        pikachu.style.marginBottom = '0';

        gameOver.style.display = 'block';
    }
}, 10);


document.addEventListener('keydown', jump);