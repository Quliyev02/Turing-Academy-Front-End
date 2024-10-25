function mergeAndMultiply(...arrays) {
    // Merge all arrays into a single array using the spread operator
    const mergedArray = [].concat(...arrays);
    
    // Multiply all numbers in the merged array
    const product = mergedArray.reduce((acc, num) => acc * num, 1);
    
    return product;
  }
  
  // Example usage
  const result = mergeAndMultiply([1, 2], [3, 4], [5]);
  console.log(result); // Output: 120
  