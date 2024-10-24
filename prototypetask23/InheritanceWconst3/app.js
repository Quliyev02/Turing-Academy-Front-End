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
        return  this.topSpeed; // Returns the top speed of the sports car
    }
}

// Example usage:
const mySportsCar = new SportsCar("Ferrari", "488 GTB", 211);
console.log(mySportsCar.getDetails()); // Outputs: Ferrari 488 GTB
console.log(mySportsCar.getTopSpeed()); // Outputs: 211
