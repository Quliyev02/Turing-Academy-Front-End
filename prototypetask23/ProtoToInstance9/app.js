/*
Task Requirements:
1. Create an instance of Car.
2. Add a property directly to the instance.
3. Show how it differs from a prototype property.
*/

// Define the Car class
class Car {
    constructor(brand, model, color, year) {
        this.brand = brand; // Car brand (instance property)
        this.model = model; // Car model (instance property)
        this.color = color; // Car color (instance property)
        this.year = year; // Car year (instance property)
    }
}

// Adding a property to the Car prototype
Car.prototype.fuelType = "Petrol"; // Prototype property

// Create an instance of Car
const myCar = new Car("Honda", "Civic", "Green", 2020);

// Add a property directly to the instance
myCar.customProperty = "This is a custom property"; // Instance property

// Display the properties
console.log("Instance Properties:");
console.log("Brand:", myCar.brand);             // op--> Brand: Honda
console.log("Model:", myCar.model);             // op--> Model: Civic
console.log("Color:", myCar.color);             // op--> Color: Green
console.log("Year:", myCar.year);               // op--> Year: 2020
console.log("Custom Property:", myCar.customProperty); // Outputs: Custom Property: This is a custom property

console.log("\nPrototype Properties:");
console.log("Fuel Type:", myCar.fuelType);     // op--> Fuel Type: Petrol

// Check if the properties are on the instance or the prototype
console.log("\nProperty Checks:");
console.log("myCar has customProperty:", myCar.hasOwnProperty('customProperty')); // true
console.log("myCar has fuelType:", myCar.hasOwnProperty('fuelType')); // false
console.log("myCar.__proto__ has fuelType:", myCar.__proto__.hasOwnProperty('fuelType')); // true
