const clockElement = document.getElementById("clock");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth() + 1; 
    let year = now.getFullYear();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    clockElement.innerText = `${day}-${month}-${year} || ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();
