// array
const arr = [1, 2, 3, 4, 5];

// Destructuring two elements and rest to third
const [first, second, ...third] = arr;

// test
console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(third);   // Output: [3, 4, 5]
