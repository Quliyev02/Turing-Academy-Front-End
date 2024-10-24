/*
Task Requirements:
1. Use Object.create to create an instance of Car without using a constructor function.
2. Add properties directly to the instance.
*/

// Define the Car prototype object with properties and a method
const CarPrototype = {
    getDetails: function() {
        return `${this.color} ${this.brand} ${this.model}, Year: ${this.year}`;
    }
};

// Create an instance of Car using Object.create
const carInstance = Object.create(CarPrototype);

// Add properties directly to the instance
carInstance.brand = "Nissan";
carInstance.model = "Altima";
carInstance.color = "Black";
carInstance.year = 2014;

// Use the getDetails method to show the car details
console.log(carInstance.getDetails()); // op; Black Nissan Altima, Year: 2021
