function calculateAnswer () {
    
    let firstNumberElement = document.getElementById("firstNumber")
    let secondNumberElement = document.getElementById("secondNumber")

    let firstNumberValue = Number(firstNumberElement.value)
    let secondNumberValue = Number(secondNumberElement.value)

    let operationElement = document.getElementById("operation")
    let operationSelected = operationElement.options[operationElement.selectedIndex].value

    let answerElement = document.getElementById("answer")
    answerElement.innerHTML = generateAnswer(firstNumberValue, secondNumberValue, operationSelected)
}

function generateAnswer (firstNumberValue, secondNumberValue, operationSelected) {
    switch(operationSelected) {
        case "+":
            return firstNumberValue + secondNumberValue
        case "-":
            return firstNumberValue - secondNumberValue
        case "*":
            return firstNumberValue * secondNumberValue
        case "/":
            return firstNumberValue / secondNumberValue
        default:
            return ""         
    }
}

