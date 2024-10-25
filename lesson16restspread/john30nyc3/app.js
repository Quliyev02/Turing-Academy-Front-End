// main object
const person = { 
    name: 'John', 
    age: 30, 
    city: 'New York', 
    profession: 'Engineer' 
  };
  
  // Destructuring name,age and using rest to store rest data in other deatils
  const { name, age, ...otherDetails } = person;
  
  // test
  console.log(name);         // john
  console.log(age);          // 30
  console.log(otherDetails); //in object ---> { city: 'New York', profession: 'Engineer' }
  