function solve(number, op1,op2,op3,op4,op5){
    let real_number=number*1;
    let operations=[op1, op2,op3,op4,op5];

    for (let index = 0; index < operations.length; index++) {
        if (operations[index]==="chop"){
            real_number/=2;
        }
        else if(operations[index]==="dice"){
            real_number=Math.sqrt(real_number);
        }
        else if(operations[index]==="spice"){
            real_number+=1;
        }
        else if(operations[index]==="bake"){
            real_number*=3;
        }
        else if(operations[index]==="fillet"){
            real_number*=0.8
        }
        console.log(real_number)
        
    }
    // console.log(real_number)
    // console.log(operations)

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')