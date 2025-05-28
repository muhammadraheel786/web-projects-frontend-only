function calculator() {
    const userweight = Number(document.getElementById("userweight").value);
    const userheight = Number(document.getElementById("userheight").value);
    const resultElement = document.getElementById("result");

    if (userweight <= 0 || userheight <= 0) {
        resultElement.innerText = "Please enter valid weight and height!";
        return;
    }

    let result = userweight / (userheight * userheight);
    let result2;

    if (result < 18.5) {
        result2 = "Underweight";
    } else if (result >= 18.5 && result <= 24.9) {
        result2 = "Normal";
    } else if (result >= 25 && result <= 29.9) {
        result2 = "Overweight";
    } else {
        result2 = "Obese";
    }

    resultElement.innerText = `BMI=${result.toFixed(2)} (${result2})`;
}


const button = document.querySelector("button");
button.addEventListener("click", calculator);
