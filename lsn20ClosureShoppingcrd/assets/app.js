//?shopping card fn

// Function that creates a shopping cart object with various methods to manipulate it
function createShoppingCart() {
    // cart stores the items in shopping card as an array of object
    let cart = [];

    return {
        // adding item to the card with name&price
        addItem(itemName, price) {
                        // each item representing as an obj {itemName, price}
            cart.push({ itemName, price });
        },
        
        // removing item from card with his name
        removeItem(itemName) {
            // Filters the cart array to exclude the item with the specified itemName
            cart = cart.filter(item => item.itemName !== itemName);
        },
        
        // Method to calculate and return the total price of all items in the cart
        getTotal() {
            // The reduce() function sums the prices of all items in the cart
            return cart.reduce((total, item) => total + item.price, 0);
        },
        
        // Method to display the current contents of the cart as a formatted string
        showCart() {
            // Uses map() to create an array of formatted strings for each item, then join them with '\n' to display each item on a new line
            return cart.map(item => `${item.itemName}: $${item.price}`).join('\n');
        }
    };
}

// test case
const cart = createShoppingCart();
cart.addItem('Apple', 1.5); // add apple with 1.5$
cart.addItem('Banana', 2.0); // add banana with 2.0$
console.log(cart.showCart()); // displaying cart apple 1.5 banana 2,0
console.log(cart.getTotal()); // displaying total 3.5
cart.removeItem('Apple'); // removing item from card for ex apple
console.log(cart.showCart()); // after removing we show remaining items


//!End of creating shoppingcard



//?memoize start


// Function that takes another function fn and returns a memoized version of it
function memoize(fn) {
    // cache stores previous function results to avoid re-calculating them
    const cache = {};

    // The returned function is the memoized version of 'fn'
    return function(...args) {
        // Creates a key from the arguments to check if the result is already cached
        const key = JSON.stringify(args);

        // If the result is cached, return it directly
        if (cache[key]) {
            return cache[key];
        } else {
            // If not, calculate the result, store it in cache, and return it
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

// test case
function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3)); // calc and cach the result 5
console.log(memoizedAdd(2, 3)); // returning cached result 5



//!memoize end


//?logger start


// Function that creates an event logger to keep track of application events
function createEventLogger() {
    // eventLog stores the list of logged events
    let eventLog = [];

    return {
        // Method to log an event by adding it to the eventLog array
        logEvent(eventName) {
            eventLog.push(eventName);
        },
        
        // Method to return all logged events
        getEvents() {
            // Returns a copy of the eventLog array
            return [...eventLog];
        },
        
        // Method to clear all events from the event log
        clearLog() {
            eventLog = [];
        }
    };
}

// test case
const logger = createEventLogger();
logger.logEvent('User logged in'); // Logs an event
logger.logEvent('File uploaded'); // Logs another event
console.log(logger.getEvents()); // Returns ['User logged in', 'File uploaded']
logger.clearLog(); // Clears the event log
console.log(logger.getEvents()); // Returns an empty array



//!logger end


//?Countdown start


// Function that creates a countdown timer with start, stop, and reset functionalities
function createCountdownTimer() {
    // 'time' stores the remaining countdown time in seconds
    let time = 0;

    // 'intervalId' holds the ID of the interval so we can stop the timer when needed
    let intervalId = null;

    return {
        // Starts the countdown from the given number of seconds
        start(seconds) {
            time = seconds;
            intervalId = setInterval(() => {
                if (time > 0) {
                    time--; // Decrement the time every second
                } else {
                    clearInterval(intervalId); // Stops the countdown when time reaches 0
                }
            }, 1000);
        },
        
        // Returns the remaining countdown time
        getTime() {
            return time;
        },
        
        // Stops the countdown timer
        stop() {
            clearInterval(intervalId); // Clears the interval to stop the countdown
        },
        
        // Resets the countdown timer to the specified number of seconds
        reset(seconds) {
            clearInterval(intervalId); // Stops any current countdown
            time = seconds; // Sets the new countdown time
        }
    };
}

// test case
const timer = createCountdownTimer();
timer.start(10); // Starts a countdown from 10 seconds
setTimeout(() => console.log(timer.getTime()), 5000); // Prints remaining time 5 sec
timer.stop(); // Stops the countdown



//!countdown end


//?Bank Account WI start


// Function that creates a bank account with deposit, withdraw, and interest features
function createBankAccountWithInterest() {
    // 'balance' stores the current balance in the account
    let balance = 0;

    return {
        // Deposits a certain amount into the account
        deposit(amount) {
            balance += amount;
        },
        
        // Withdraws a certain amount from the account if funds are sufficient
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
            } else {
                console.log('Insufficient funds');
            }
        },
        
        // Returns the current balance in the account
        checkBalance() {
            return balance;
        },
        
        // Adds interest to the balance based on a percentage rate
        addInterest(rate) {
            balance += (balance * rate / 100);
        }
    };
}

// test case
const account = createBankAccountWithInterest();
account.deposit(1000); // deposit $1000
account.addInterest(5); // add 5% interest balance is now $1050
console.log(account.checkBalance()); // return 1050
account.withdraw(500); // withdraws $500
console.log(account.checkBalance()); // returns 550



//!End Bank account WI



