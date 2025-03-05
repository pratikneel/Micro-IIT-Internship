let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;
let interval;

function startStop() {
    if (running) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    running = !running;
}

function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    document.getElementById("milliseconds").textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function reset() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "00";
    document.getElementById("startStop").textContent = "Start";
    running = false;
}