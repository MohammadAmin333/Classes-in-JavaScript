// Parent class (Base class)
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
// Child class (Derived class) that inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        // Call the parent class's constructor with the name parameter
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks.`);
    }
}
// Creating an instance of the parent class
let animal = new Animal('Generic Animal');
animal.speak(); // Output: Generic Animal makes a noise.
// Creating an instance of the child class
let dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Output: Rex barks.
console.log(dog.name); // Output: Rex
console.log(dog.breed); // Output: German Shepherd