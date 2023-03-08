function addressBook(arr){
    let book={};
    let bookArray=[];

    for(line of arr){
        let [name, address]=line.split(":")
        book[name]=address;
        
    }

    for (n in book){
        bookArray.push(n);
    }

    let sortedBookArray= bookArray.sort((nameA, nameB)=> nameA.localeCompare(nameB))
    

    for (key of sortedBookArray){
        console.log(`${key} -> ${book[key]}`)
    }
}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

)