function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let generateBackgroundcolor = null;

function onStartBtn(event) {
    stopBtn.disabled = false;
    startBtn.disabled = true;
    generateBackgroundcolor = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000);
}

function onStopBtn(event) {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(generateBackgroundcolor);
}

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);