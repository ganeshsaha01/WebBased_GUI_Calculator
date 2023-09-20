function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
  function calculatePercentage() {
    const display = document.getElementById("display");
    const currentValue = display.value;
    try {
        display.value = eval(currentValue + "/100");
    } catch (error) {
        display.value = "Error";
    }
}
function removeLastCharacter() {
    const display = document.getElementById("display");
    const currentValue = display.value;
    
    // Check if the display value is not empty
    if (currentValue.length > 0) {
        // Remove the last character
        display.value = currentValue.slice(0, -1);
    }
}




