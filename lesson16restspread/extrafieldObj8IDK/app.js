function addField(arr, extraField, value) {
    // Use map to iterate over each object in the array
    return arr.map(obj => {
      // Spread the existing object properties with the rest operator
      // Add the new field dynamically using [extraField]: value
      return { ...obj, [extraField]: value };
    });
  }
  
  // for ex
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ];
  
  // Call the function to add an 'isStudent' field with the value 'true' to each object
  const updatedPeople = addField(people, 'isStudent', true);
  
  // Log the modified array to see the updated objects
  console.log(updatedPeople);
  