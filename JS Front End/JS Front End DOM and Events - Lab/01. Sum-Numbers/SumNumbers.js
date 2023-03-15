function calc() {
    const numberOne=document.getElementById("num1").value;
    const numberTwo=document.getElementById("num2").value;
    let sum = Number(numberOne)+Number(numberTwo);

    const result=document.getElementById('sum').value=sum;
    console.log(numberOne)
}
