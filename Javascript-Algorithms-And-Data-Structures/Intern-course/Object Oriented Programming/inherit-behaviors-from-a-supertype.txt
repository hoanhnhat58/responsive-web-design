function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line
let animal = Object.create(Animal.prototype);
let duck = Object.create(Animal.prototype); ; // Change this line
let beagle= Object.create(Animal.prototype);; // Change this line