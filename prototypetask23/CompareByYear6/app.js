/*
Task Requirements:
1. Create a Car class with properties for brand, model, color, and year.
2. Implement a static method called compare that takes two car objects and returns the one with the higher year.
3. Include a method to get car details, demonstrating all properties.
*/

// Define the Car class
class Car {
    constructor(brand, model, color, year) {
        this.brand = brand; // Car brand
        this.model = model; // Car model
        this.color = color; // Car color
        this.year = year; // Car year
    }

    // Modify the getDetails method to include the color and year
    getDetails() {
        return `${this.color} ${this.brand} ${this.model}, Year: ${this.year}`; // Returns car details
    }

    // Static method to compare two car instances by year
    static compare(car1, car2) {
        if (car1.year > car2.year) {
            return car1; // Return the car with the higher year
        } else if (car2.year > car1.year) {
            return car2; // Return the car with the higher year
        } else {
            return null; // Return null if both years are equal
        }
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

// Create instances of Car
const car1 = new Car("Toyota", "Camry", "Blue", 2020);
const car2 = new Car("Honda", "Civic", "Red", 2021);

// Create instances of SportsCar
const sportsCar1 = new SportsCar("Porsche", "911 Turbo", "Red", 2019, 205);
const sportsCar2 = new SportsCar("Ferrari", "488 GTB", "Yellow", 2022, 211);

// Use the static compare method to find the car with the higher year
const newerCar = Car.compare(car1, car2);
console.log(`Newer Car: ${newerCar.getDetails()}`); // op->: Newer Car: Red Honda Civic, Year: 2021

const newerSportsCar = Car.compare(sportsCar1, sportsCar2);
console.log(`Newer Sports Car: ${newerSportsCar.getDetails()}`); // op-> Newer Sports Car: Yellow Ferrari 488 GTB, Year: 2022

// Test comparison of a sports car with a regular car
const newerCarMixed = Car.compare(sportsCar1, car1);
console.log(`Newer Mixed Car: ${newerCarMixed.getDetails()}`); // op-> Newer Mixed Car: Blue Toyota Camry, Year: 2020
