const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let arrayMatch = false;

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        arrayMatch = true;
      } else {
        arrayMatch = false;
      }
    }
  }

  return arrayMatch;
};

/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
*/
const middle = function(array) {
  let middleOfArray = [];
  // should return an array
  // for arrays with 1 or 2 elements, there is no middle - return empty

  if (array.length > 2) {
    // for odd number, single middle element should be returned
    // for even number, 2 middle elements should be returned
    // use array.length / 2 to measure where the middle is

    let centre = array.length / 2;

    // (array.length / 2) - 0.5 if odd
    // (array.length / 2) - 1 and (array.length / 2) if even

    if (array.length % 2 === 0) {
      middleOfArray.push(array[centre - 1], array[centre]);
    } else {
      middleOfArray.push(array[centre - 0.5]);
    }
  }

  return middleOfArray;
};

// TEST CODE
assertArraysEqual(middle([1]), [1]); // should fail
assertArraysEqual(middle([1, 2]), [1, 2]); // should fail
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);