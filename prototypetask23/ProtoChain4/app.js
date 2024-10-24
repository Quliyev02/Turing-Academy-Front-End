/*
Task Requirements
1. Create a Car class with properties for brand and model and a method to get car details.
2. Create a SportsCar class that inherits from Car.
3. Add a property for topSpeed in SportsCar and a method getTopSpeed that returns the top speed.
4. Demonstrate the prototype chain by creating an instance of SportsCar and accessing properties and methods from both Car and SportsCar.
*/

// Define the Car class
class Car {
    constructor(brand, model) {
        this.brand = brand; // Car brand
        this.model = model; // Car model
    }

    getDetails() {
        return `${this.brand} ${this.model}`; // Returns car details
    }
}

// Define the SportsCar class that inherits from Car
class SportsCar extends Car {
    constructor(brand, model, topSpeed) {
        super(brand, model); // Call the parent constructor
        this.topSpeed = topSpeed; // Set the top speed
    }

    getTopSpeed() {
        return this.topSpeed; // Returns the top speed of the sports car
    }
}

// Create an instance of SportsCar
const mySportsCar = new SportsCar("Porsche", "911 Turbo", 205);

// Access properties and methods from SportsCar
console.log(mySportsCar.getTopSpeed()); // op-> 205

// Access properties and methods from Car through SportsCar instance
console.log(mySportsCar.getDetails()); // op-> Porsche 911 Turbo

// Accessing properties directly
console.log(mySportsCar.brand); // op-> Porsche
console.log(mySportsCar.model); // op-> 911 Turbo
console.log(mySportsCar.topSpeed); // op-> 205

// Demonstrating the prototype chain
console.log(mySportsCar instanceof SportsCar); //op-> true
console.log(mySportsCar instanceof Car); //op-> true

// Check the prototype chain
console.log(Object.getPrototypeOf(mySportsCar) === SportsCar.prototype); //op-> true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(mySportsCar)) === Car.prototype); //op-> true
