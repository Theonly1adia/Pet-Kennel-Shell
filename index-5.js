function createPet(name, species, happiness= 50) {

    let energy = Math.floor(Math.random() * 51); // Random initial energy between 0 and 50

    
    let pet = {
        name: name,
        species: species,
        happiness: happiness,
        energy: energy,

        play() {
            this.happiness += 10;
            this.energy -= 15;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`);
        },
        feed() {
            let happinessIncrease = Math.floor(Math.random() * 20) + 10;
            this.happiness += happinessIncrease;
            this.energy += 20;
            console.log(`Feeding ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`);
        },
        status() {
            console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}.`);
        }
    };
// Return the pet object
    return pet;
}



    



//Create Kennels
let dogKennel = [
    createPet("Bella", "Dog"),
    createPet("Rex", "Dog"),
    createPet("Tchoups", "Dog"),
    createPet("Rocky", "Dog"),
    createPet("Buddy", "Dog")
];

let catKennel = [
    createPet("Stuffy", "Cat"),
    createPet("Whiskers", "Cat"),
    createPet("Mittens", "Cat"),
    createPet("Shadow", "Cat"),
    createPet("Simba", "Cat")
];

let fishTank = [
    createPet("Goldie", "Fish"),
    createPet("Bubbles", "Fish"),
    createPet("Splash", "Fish"),
    createPet("Finley", "Fish"),
    createPet("Nemo", "Fish")
];


//Play with the Pets
dogKennel[0].play();
dogKennel[0].play();
dogKennel[0].play();

dogKennel[1].play();

catKennel[0].play();
catKennel[0].play();

fishTank[0].play();
fishTank[1].play();

// Log status after playing
console.log("\nStatus After Playing:");
dogKennel.forEach(pet => pet.status());
catKennel.forEach(pet => pet.status());
fishTank.forEach(pet => pet.status());

//Feed Pets with low energy
console.log("\nFeeding Pets with Low Energy:");

const feedPetsIfLowEnergy = (kennel) => {
    for (let i = 0; i < kennel.length; i++) {
        if (kennel[i].energy < 30) {
            kennel[i].feed();
        }
    }
};

feedPetsIfLowEnergy(dogKennel);
feedPetsIfLowEnergy(catKennel);
feedPetsIfLowEnergy(fishTank);

// Final status after feeding
console.log("\nFinal Status After Feeding:");
dogKennel.forEach(pet => pet.status());
catKennel.forEach(pet => pet.status());
fishTank.forEach(pet => pet.status());