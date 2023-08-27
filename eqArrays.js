const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
*/

const eqArrays = function(arr1, arr2) {
  // default return value is false in case arrays are not of matching length
  let arrayMatch = false;

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      // compares each element of array 1 to its corresponding element in array 2
      if (arr1[i] === arr2[i]) {
        arrayMatch = true;
      } else {
        // resets return value to false if any elements are not matching
        arrayMatch = false;
      }
    }
  }

  return arrayMatch;
}

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);