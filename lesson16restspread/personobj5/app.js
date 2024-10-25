const person = {
    name: 'Alice',
    age: 28
  };
  
  // for clone the object and add new city prop
  function addCityToPerson(personObj, city) {
    // clonning with spread and adding city prop
    return { ...personObj, city: city };
  }
  
  // testttt
  const clonedPerson = addCityToPerson(person, 'New York');
  console.log(clonedPerson);
  //obj --> { name: 'Alice', age: 28, city: 'New York' }
  
  console.log(person);  // origjinal person is still unchanged
  //obj--> { name: 'Alice', age: 28 }
  