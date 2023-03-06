function reverse(n,array){
    let new_arr= array.splice(0,n);
    let reversed_arr=new_arr.reverse()
    console.log(reversed_arr.join(" "))
}
reverse(3, [10, 20, 30, 40, 50])