function sumAll(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  
  // test
  console.log(sumAll(1, 2, 3, 4)); // 10
  console.log(sumAll(5, 10, 15));  // 30
  console.log(sumAll(5, 5, 5, 5, 5, 5, 5, 5, 5, 5)); //50
  