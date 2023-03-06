function formatGrade(grade){
    text="";
    if (grade>=5.50){
        text="Excellent"
    }
    else if(grade>=4.50){
        text="Very good"
    }
    else if(grade>=3.50){
        text="Good"
    }
    else if(grade>=3.00){
        text="Poor"
    }
    else{
    text="Fail"
    console.log(`${text} (2)`)
    return
    }
    console.log(`${text} (${grade.toFixed(2)})`)
    
}

formatGrade(5.50)