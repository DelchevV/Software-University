function solve(a,b,c){
    let result=a+b+c
    let arr=result.split("")
    arr=arr.reverse()
    console.log(arr.join(" "))
}

solve('A',
'B',
'C'
)