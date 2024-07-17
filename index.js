/* Gregor Remec - 2024 */

const display = document.getElementById("display");

function clearScreen() {
    display.value = "";
}

function addtoScreen(input) {
    display.value += input;
}

function doMath() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}