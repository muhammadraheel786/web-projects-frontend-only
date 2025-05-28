const convertBtn = document.getElementById("convertBtn");
const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const resultInput = document.getElementById("result");

convertBtn.addEventListener("click", function() {
    const tempValue = parseFloat(tempInput.value);
    const unit = unitSelect.value;

    if (isNaN(tempValue)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    let convertedTemp;

    if (unit === "celsius") {
        convertedTemp = `${tempValue} °C is ${(tempValue * 9/5) + 32} °F or ${(tempValue + 273.15)} K`;
    } else if (unit === "fahrenheit") {
        convertedTemp = `${tempValue} °F is ${((tempValue - 32) * 5/9).toFixed(2)} °C or ${((tempValue - 32) * 5/9 + 273.15).toFixed(2)} K`;
    } else if (unit === "kelvin") {
        convertedTemp = `${tempValue} K is ${(tempValue - 273.15).toFixed(2)} °C or ${((tempValue - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }

    resultInput.value = convertedTemp;
});
