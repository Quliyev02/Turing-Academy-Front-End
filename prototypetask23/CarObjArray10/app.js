// 1. Define the Car constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// 2. Define the getDetails method on Car's prototype
Car.prototype.getDetails = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

// 3. Define a method to find the latest car by year in an array
Car.prototype.findLatestCar = function(carArray) {
    return carArray.reduce((latestCar, currentCar) => {
        return currentCar.year > latestCar.year ? currentCar : latestCar;
    });
};

// 4. Create an array of Car objects
const carsArray = [
    new Car('BMW', 'M5', 2015),
    new Car('Audi', 'A4', 2018),
    new Car('Mercedes', 'CLS 63', 2012)
];

// 5. Call findLatestCar to find the car with the latest year
const latestCar = Car.prototype.findLatestCar(carsArray);

// 6. Log the details of the latest car using the getDetails method
console.log('Latest car in array:', latestCar.getDetails());  // Logs audi a 4 2018
