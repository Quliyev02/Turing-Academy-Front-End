/*
Task Requirements:
1. Write a function that checks if a given object is an instance of Car or SportsCar using instanceof.
*/

// Define the Car class
class Car {
    constructor(brand, model, color, year) {
        this.brand = brand; // Car brand
        this.model = model; // Car model
        this.color = color; // Car color
        this.year = year; // Car year
    }

    getDetails() {
        return `${this.color} ${this.brand} ${this.model}, Year: ${this.year}`;
    }
}

// Define the SportsCar class that inherits from Car
class SportsCar extends Car {
    constructor(brand, model, color, year, topSpeed) {
        super(brand, model, color, year); // Call the parent constructor
        this.topSpeed = topSpeed; // Set the top speed
    }

    getTopSpeed() {
        return this.topSpeed; // Returns the top speed of the sports car
    }
}

// Function to check if an object is an instance of Car or SportsCar
function checkInstance(obj) {
    if (obj instanceof SportsCar) {
        return "The object is an instance of SportsCar.";
    } else if (obj instanceof Car) {
        return "The object is an instance of Car.";
    } else {
        return "The object is not an instance of Car or SportsCar.";
    }
}

// Example usage
const carInstance = new Car("Toyota", "Camry", "Blue", 2020);
const sportsCarInstance = new SportsCar("Porsche", "911 Turbo", "Red", 2019, 205);
const plainObject = {};

console.log(checkInstance(carInstance));         // op-> : The object is an instance of Car.
console.log(checkInstance(sportsCarInstance));  // op-> The object is an instance of SportsCar.
console.log(checkInstance(plainObject));         // op-> : The object is not an instance of Car or SportsCar.
