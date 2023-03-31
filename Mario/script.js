const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {

    mario.classList.remove('jump');

    },500);
}

const loop = setInterval(() => {

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  
    if (canoPosition <= 105 && canoPosition > 0 && marioPosition < 85) {
        
        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './gif mario/morte.webp'

        clearInterval(loop);
    }
    

}, 10)

document.addEventListener('keydown', jump);