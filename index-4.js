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

let dogKennel = [
    createPet("Bella", "Dog", 50),
    createPet("Tchoups", "Dog", 40),
    createPet("Rocky", "Dog", 60),
    createPet("Buddy", "Dog", 55),
    createPet("Oreo", "Dog", 65)
];

let catKennel = [
    createPet("Stuffy", "Cat", 65),
    createPet("Whiskers", "Cat", 50),
    createPet("Mittens", "Cat", 60),
    createPet("Shadow", "Cat", 55),
    createPet("Simba", "Cat", 70)
];

let fishTank = [
    createPet("Goldie", "Fish", 55),
    createPet("Bubbles", "Fish", 60),
    createPet("Splash", "Fish", 50),
    createPet("Stanley", "Fish", 65),
    createPet("Nemo", "Fish", 70)
];

for (let i = 0; i < dogKennel.length; i++) {
    dogKennel[i].feed(); //Feed the pet
    console.log(`Feeding ${dogKennel[i].name}! Happiness is now ${dogKennel[i].happiness}.`);
}

console.log("\nFinal Status of Dog Kennel:");
for (let i = 0; i < dogKennel.length; i++) {
    dogKennel[i].status();
}

for (let i = 0; i < catKennel.length; i++) {
    catKennel[i].feed();// FEed the cat
    console.log(`Feeding ${catKennel[i].name}! Happiness is now ${catKennel[i].happiness}.`);
}

console.log("\nFinal Status of Cat Kennel:");
for (let i = 0; i < catKennel.length; i++) {
    catKennel[i].status();
}

fishTank.forEach(pet => {
    pet.feed();
});

console.log("\nFinal Status of Fish Tank:");
fishTank.forEach(pet => {
    pet.status();
});