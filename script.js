const run = document.querySelector('.run');
const alien = document.querySelector('.alien');

const jump = () => {
    run.classList.add('jump');

    setTimeout(() => {
        run.classList.remove('jump');
    }, 600)
}

const loop = setInterval(() => {

    console.log('loop')

    const alienPosition = alien.offsetLeft;
    const runPosition = +window.getComputedStyle(run).bottom.replace('px', '');


    console.log(runPosition);

    if (alienPosition <= 70 && alienPosition > 0 && runPosition < 50) {
        alien.style.animation = 'none';
        alien.style.left = `${alienPosition}px`;

        run.style.animation = 'none';
        run.style.bottom = `${runPosition}px`;

        run.src = 'imagens/gifs/capturada.gif';
        run.style.width = '80px'
        run.style.marginLeft = '10px'

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
