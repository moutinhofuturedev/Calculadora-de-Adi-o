let numberOne = document.getElementById('number-one')
let numberTwo = document.getElementById('number-two')
let result = document.getElementById('result')


function calculate() {
    let printResult = numberOne.valueAsNumber + numberTwo.valueAsNumber
    result.textContent = printResult
}

document.addEventListener('input', calculate)

