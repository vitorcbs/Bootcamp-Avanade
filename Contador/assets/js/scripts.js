var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

const ADICIONAR = document.getElementById("adicionar");
ADICIONAR.addEventListener("click", increment);
const SUBTRAIR = document.getElementById("subtrair");
SUBTRAIR.addEventListener("click", decrement);

function increment() {
    if (currentNumber >= 10) {
        return;
    }

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 0) {
        document.getElementById("currentNumber").style.color = "white";
    }
}

function decrement() {
    if (currentNumber <= -10) {
        return;
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
    } else if (currentNumber >= 0) {
        document.getElementById("currentNumber").style.color = "white";
    }
}
