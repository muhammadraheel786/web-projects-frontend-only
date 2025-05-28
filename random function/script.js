const button = document.querySelector("button");
const result = document.querySelector("h1");

let count;

function redom() {
    count = Math.floor(Math.random() * 100);
    result.innerText = "click " + count;
}

button.addEventListener("click", redom);
