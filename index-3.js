function createPet(name, species, happiness = 50, energy = 100) {
    let pet = {
        name: name,
        species: species,
        happiness: happiness,
        energy: energy,
    

    play: function() {
        this.energy -= 20;
        this.happiness += 10;
        console.log (`You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`);
    },

    feed: function() {
        this.happiness += 20;
        this.energy += 20;
        console.log(`You fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.`);
    },

    status: function() {
        console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy ${this.energy}.`);
    },

    rest: function() {
        this.energy = 100;
        console.log(`${this.name} has rested. Energy is now fully restored to 100.`);
    }

    };
    
pet.status();
    return pet;
}

let pet1 = createPet("Bella", "Dog", 50);
let pet2 = createPet("Stuffy", "Cat", 65);
let pet3 = createPet("Tchoups", "Dog", 40);