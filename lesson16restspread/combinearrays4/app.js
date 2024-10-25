// combine two array func
function combineArrays(array1, array2) {
    return [...array1, ...array2];
  }
  
  // test
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  const combined = combineArrays(arr1, arr2);
  console.log(combined);  //in array --> [1, 2, 3, 4, 5, 6];
  