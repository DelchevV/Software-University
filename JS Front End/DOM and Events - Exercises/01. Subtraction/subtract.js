function subtract() {
    const numberOne = document.getElementById('firstNumber').value;
    const numberTwo = document.getElementById('secondNumber').value;
    const result = document.getElementById("result");
    let division = Number(numberOne) - Number(numberTwo);
    result.textContent = division;
}