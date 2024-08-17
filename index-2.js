

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


let pet1 = createPet("Bella", "Dog");
pet1.status(); // Output: Pet Name: Bella, Species: Dog, Happiness: 50, Energy: 100
console.log(pet1.play()); // Output: You played with Fluffy! Happiness is now 60, Energy is now 80.
pet1.status(); // Output: Pet Name: Bella, Species: Dog, Happiness: 60, Energy: 80
console.log(pet1.feed()); // Output: You fed Fluffy! Happiness is now 70, Energy is now 100.
pet1.status(); // Output: Pet Name: Bella, Species: Dog, Happiness: 70, Energy: 100

let pet2 = createPet("Stuffy", "Cat");
pet2.status(); // Output: Pet Name: Stuffy, Species: Cat, Happiness: 50, Energy: 100
console.log(pet2.play()); // Output: You played with Fluffy! Happiness is now 60, Energy is now 80.
pet2.status(); // Output: Pet Name: Stuffy, Species: Cat, Happiness: 60, Energy: 80
console.log(pet2.feed()); // Output: You fed Fluffy! Happiness is now 70, Energy is now 100.
pet2.status(); // Output: Pet Name: Stuffy, Species: Cat, Happiness: 70, Energy: 100

let pet3 = createPet("Tchoups", "Dog");
pet3.status(); // Output: Pet Name: Tchoups, Species: Dog, Happiness: 50, Energy: 100
console.log(pet3.play()); // Output: You played with Fluffy! Happiness is now 60, Energy is now 80.
pet3.status(); // Output: Pet Name: Tchoups, Species: Dog, Happiness: 60, Energy: 80
console.log(pet3.feed()); // Output: You fed Fluffy! Happiness is now 70, Energy is now 100.
pet3.status(); // Output: Pet Name: Tchoups, Species: Dog, Happiness: 70, Energy: 100