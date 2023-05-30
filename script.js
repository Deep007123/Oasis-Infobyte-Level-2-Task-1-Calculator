let currentExpression = "";

function appendNumber(number) {
    currentExpression += number;
    updateResult();
}

function appendOperator(operator) {
    currentExpression += operator;
    updateResult();
}

function clearResult() {
    currentExpression = "";
    updateResult();
}

function calculate() {
    try {
        const result = eval(currentExpression);
        currentExpression = result.toString();
        updateResult();
    } catch (error) {
        currentExpression = "";
        updateResult();
        alert("Error in expression");
    }
}

function updateResult() {
    document.getElementById("result").value = currentExpression;
}