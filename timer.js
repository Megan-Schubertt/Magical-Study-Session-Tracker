<<<<<<< HEAD
const startingMinutes = 25;
let time = startingMinutes * 60;
let interval = null;

const countdownEl = document.getElementById('countdown');
const startBtn = document.getElementById('start-btn');

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    
    if (time <= 0) {
        clearInterval(interval)
    } else {
        time--;
    }
}
startBtn.addEventListener('click', () => {
    if (!interval) {
        updateCountdown();
        interval = setInterval(updateCountdown, 1000);
    }
});
=======

>>>>>>> 3117e573d1b650b69359618db5db2dbf51456dc1
