// Base Class: Animal
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Subclass: Cat
class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  purr() {
    console.log("purr");
  }
}

// Subclass: Dog
class Dog extends Animal {
  constructor() {
    super("Dog");
  }

  bark() {
    console.log("woof");
  }
}
module.exports = {
  Animal,
  Cat,
  Dog,
};
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
