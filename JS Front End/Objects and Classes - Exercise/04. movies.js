function movieSolve(arr){
    let movies=[];

    class movie{
        constructor(name){
            this.name=name
            this.date=""
            this.director=""
            
        }
    }

    for (line of arr){
        if (line.startsWith("addMovie")){
            line=line.replace("addMovie", "").trim()
            let film= new movie(line)
            movies.push(film);

        }else if(line.includes("directedBy")){

            line= line.replace("directedBy", "")
            let [movieTitle, movieDirector]=line.split("  ")

            for(mov of movies){
                if (mov.name==movieTitle){
                    mov.director=movieDirector
                }
            }
        } else if(line.includes("onDate")){
            
            line= line.replace("onDate", "")
            let [movieTitle, movieDate]=line.split("  ")

            for(mov of movies){
                if (mov.name==movieTitle){
                    mov.date=movieDate
                }
            }
        }

    }


    for(mov of movies){
        if (mov.director!=="" && mov.date!==""){
            console.log(JSON.stringify(Object(mov)))
        }
    }
}

movieSolve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]    
    )