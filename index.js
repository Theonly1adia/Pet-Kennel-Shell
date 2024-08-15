
//Created the pet object
const pet = {
    name: "Austin",
    species: "Dog",
    happiness: 60,

//Method to play with the pet
play: function() {
    this.happiness += 10;
    console.log (`You played with ${this.name}! Happiness is now ${this.happiness}.`);
},

//Method to feed the pet
feed: function() {
    this.happiness += 20;
    console.log(`You fed ${this.name}! Happiness is now ${this.happiness}.`);
},

//Method to display the pet's status
status: function() {
    console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}.`)
},

//Method to rename the pet
rename: function(newName) {
    this.name = newName;
    console.log(`Your pet's new name is ${this.name}`)
}

};


//Testing the pet objects and its methods 

pet.status(); // Output: Pet Name: Austin, Species: Dog, Happiness: 60
console.log(pet.play()); // Output: You played with Austin! Happiness is now 70.
pet.status(); // Output: Pet Name: Austin, Species: Dog, Happiness: 70.
console.log(pet.feed()); // Output: You fed Austin! Happiness is now 90.
pet.status(); // Output: Pet Name: Austin, Species: Dog, Happiness: 90.


//Rename task
pet.rename ('Bella'); //Your pet's new name is Bella!
pet.status(); // Output: Pet Name: Sparky, Species: Dog, Happiness: 80

