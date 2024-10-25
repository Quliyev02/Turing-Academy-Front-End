const person = { name: 'Alice' };
const details = { age: 25 };

//combining with spread op
const combined = { ...person, ...details };

console.log(combined);
//output is a obj name alice age 25