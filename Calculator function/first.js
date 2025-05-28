function calculate() {
    const userinput1 = Number(document.getElementById("num1").value);
    const userinput2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operation").value;

    let result;

    if (operator === "+") {
        result = userinput1 + userinput2;
    } else if (operator === "-") {
        result = userinput1 - userinput2;
    } else if (operator === "*") {
        result = userinput1 * userinput2;
    } else if (operator === "/") {
        if (userinput2 === 0) {
            result = "Division by zero is not possible";
        } else {
            result = userinput1 / userinput2;
        }
    } else {
        result = "Invalid operation entered!";
    }

    document.getElementById("result").innerText = "Result is: " + result;
}

const button = document.querySelector("button");
button.addEventListener("click", calculate);


