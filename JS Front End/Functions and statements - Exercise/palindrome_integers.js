function isPalindrome(numbers){
    for(num of numbers){
        reversedNum=String(num)
        .split("")
        .reverse()
        .join("")
        if (Number(reversedNum)===num){
            console.log("true")
        }
        else{
            console.log("false")
        }
    }
}

isPalindrome([123,323,421,121])