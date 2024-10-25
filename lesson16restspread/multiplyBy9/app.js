function multiplyBy(accent, ...numbers) {
    // Map through the rest of the arguments and multiply each by the accent
    return numbers.map(number => number * accent);
  }
  
  // example
  const result = multiplyBy(3, 1, 2, 4, 5);
  console.log(result); // output 3, 6, 12, 15
  