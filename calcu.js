let display = document.getElementById("display");

function add(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = display.value;
    let operator = "";

    if (expression.includes("+")) {
        operator = "+";
    } else if (expression.includes("-")) {
        operator = "-";
    } else if (expression.includes("*")) {
        operator = "*";
    } else if (expression.includes("/")) {
        operator = "/";
    }

    let numbers = expression.split(operator);

    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);

    let answer;

    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;

        case "-":
            answer = num1 - num2;
            break;

        case "*":
            answer = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                display.value = "Error";
                return;
            }

            answer = num1 / num2;
            break;

        default:
            display.value = "Error";
            return;
    }

    display.value = answer;
}