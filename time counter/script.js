const timeInput = document.getElementById("timeInput");
const startButton = document.getElementById("startButton");
const timerDisplay = document.getElementById("timerDisplay");


let countdown;

function startCountdown()
 {
    let time = Number(timeInput.value);

    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid positive number!");
        return;
    }

    clearInterval(countdown); 
    timerDisplay.innerText = formatTime(time);

    countdown = setInterval(function () {
        if (time <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = "Time's up!";
            alert("Countdown finished!");
        } else {
            time--;
            timerDisplay.innerText = formatTime(time);
        }
    }, 1000);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

startButton.addEventListener("click", startCountdown);
