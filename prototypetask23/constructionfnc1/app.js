// Constructor function to create a Car object with make, model, and year properties.
function Car(make, model, year) {
    this.make = make;  // Car make (e.g., Toyota)
    this.model = model;  // Car model (e.g., Camry)
    this.year = year;  // Year of the car (e.g., 2020)
}

// Creating an instance of Car and logging it
const carInstance = new Car('Toyota', 'Camry', 2020);
console.log('Car instance:', carInstance);  // Logs the Car object
