let clock = document.querySelector('.clock');

function timer() {
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

function startTimer() {
    setInterval(timer, 1000);
    timer();
}
startTimer();
