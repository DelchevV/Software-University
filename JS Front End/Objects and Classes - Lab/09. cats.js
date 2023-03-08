function meowSound(arr){
    let cats=[];

    class Cat{
        constructor(name, age){
            this.name=name;
            this.age=age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (line of arr){
        let [name, age]=line.split(" ");
        let cat= new Cat(name, age)
        cats.push(cat)
    }
    

    for (c of cats){
        c.meow()
    }
}

meowSound(['Mellow 2', 'Tom 5'])
meowSound(['Candy 1', 'Poppy 3', 'Nyx 2'])