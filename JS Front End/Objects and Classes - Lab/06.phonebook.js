function phoneBook(arr){
    let phone={};

    for(line of arr){
        let [name, phoneNum]=line.split(" ");
        phone[name]=phoneNum;
    }

    for (record in phone){
        console.log(`${record} -> ${phone[record]}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])