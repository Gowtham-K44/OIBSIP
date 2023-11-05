document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const resultText = document.getElementById("resultText");

    convertButton.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);

        if (isNaN(temperature)) {
            resultText.textContent = "Please enter a valid number.";
            return;
        }

        const selectedUnit = unitSelect.value;

        if (selectedUnit === "celsius") {
            const convertedTemperature = (temperature - 32) * 5/9;
            resultText.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
        } else if (selectedUnit === "fahrenheit") {
            const convertedTemperature = (temperature * 9/5) + 32;
            resultText.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
        } else if (selectedUnit === "kelvin") {
            const convertedTemperature = temperature + 273.15;
            resultText.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} K`;
        }
    });
});
