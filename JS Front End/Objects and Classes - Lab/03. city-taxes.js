<<<<<<< HEAD
function cityTaxes(name, population, treasury) {
    let MadeCity = {
        name,
        population,
        treasury,
        taxRate: Number(10),
        collectTaxes() {
            this.treasury += this.taxRate * this.population
        },

        applyGrowth(percentage) {
            this.population = Math.trunc(this.population + this.population*(percentage/100))
            
        },
        applyRecession(percentage) {
            this.treasury = Math.trunc(this.treasury - this.treasury*(percentage/100))
            
        }
    }
    return MadeCity
}


const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

=======
function cityTaxes(name, population, treasury) {
    let MadeCity = {
        name,
        population,
        treasury,
        taxRate: Number(10),
        collectTaxes() {
            this.treasury += this.taxRate * this.population
        },

        applyGrowth(percentage) {
            this.population = Math.trunc(this.population + this.population*(percentage/100))
            
        },
        applyRecession(percentage) {
            this.treasury = Math.trunc(this.treasury - this.treasury*(percentage/100))
            
        }
    }
    return MadeCity
}


const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

>>>>>>> ab94c66f51bce0397e6d8d263f78e25cd9d3629d
