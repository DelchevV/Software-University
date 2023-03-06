function check(a,b,c){
    nums=[a,b,c];
    let negativeCounter=0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index]<0){
            negativeCounter+=1;
        }     
    }
    if (negativeCounter%2===0){
        return "Positive"
    }
    else{
        return "Negative"
    }
}

console.log(check(5,12,-15))