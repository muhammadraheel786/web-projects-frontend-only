const userInput = document.querySelector("input");
const check = document.querySelector("button");
const result = document.querySelector("h2");

function evencheck() {
    const value = userInput.value.trim();

    if (value === "" || isNaN(value)) {
        result.innerText = "Please enter a valid number";
        return;
    }

    if (Number(value) % 2 === 0) {
        result.innerText = "Number is even";
    } else {
        result.innerText = "Number is odd";
    }
};

check.addEventListener("click", evencheck);
