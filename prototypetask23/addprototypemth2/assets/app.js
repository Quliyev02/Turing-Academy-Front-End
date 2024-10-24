// Assuming the Car constructor is defined like this
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Task 2: Add Prototype Method getDetails
Car.prototype.getDetails = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

// Create an instance of Car to test the method
const car1 = new Car('Toyota', 'Camry', 2020);

// Test the getDetails method
console.log(car1.getDetails());  // Should log: 2020 Toyota Camry
