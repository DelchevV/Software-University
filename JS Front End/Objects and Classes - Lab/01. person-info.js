function personInfo(firstName, lastName, age){
    let personInfo={
        "firstName":firstName,
        "lastName":lastName,
        "age":age
    }
    return personInfo
    for (person in personInfo){
        console.log(`${person}: ${personInfo[person]}`)
    }
}

personInfo("Peter", 
"Pan",
"20"
)
personInfo("George", 
"Smith",
"18"
)