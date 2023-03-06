function calc(num1, num2, operator){

   const multiply=(a, b)=> a*b;
   const add=(a,b)=> a+b;
   const divide=(a,b)=>a/b;
   const subtract=(a,b)=>a-b;
   
   const operationMapping = {
    multiply:multiply,
    add:add,
    divide:divide,
    subtract:subtract,
   }

   return operationMapping[operator](num1, num2);
}


console.log(
    calc(5,5,'multiply')
)
