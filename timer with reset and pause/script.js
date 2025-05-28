const timeInput = document.getElementById("timeInput");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const timerDisplay = document.getElementById("timerDisplay");

let countdown;
let time = 0;
let isPaused = false;

function startCountdown() {
    if (isPaused) {
        isPaused = false;
    } else {
        time = Number(timeInput.value);
    }

    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid positive number!");
        return;
    }

    clearInterval(countdown);

    countdown = setInterval(function () {
        if (!isPaused) {
            if (time <= 0) {
                clearInterval(countdown);
                timerDisplay.innerText = "Time's up!";
                alert("Countdown finished!");
            } else {
                time--;
                timerDisplay.innerText = formatTime(time);
            }
        }
    }, 1000);

    timerDisplay.innerText = formatTime(time);
}

function pauseCountdown() {
    isPaused = true;
}

function resetCountdown() {
    clearInterval(countdown);
    time = 0;
    timeInput.value = "";
    timerDisplay.innerText = "00:00";
    isPaused = false;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

startButton.addEventListener("click", startCountdown);
pauseButton.addEventListener("click", pauseCountdown);
resetButton.addEventListener("click", resetCountdown);
