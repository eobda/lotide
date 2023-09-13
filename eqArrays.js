/* Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
*/

const eqArrays = function(arr1, arr2) {
  // default return value is false in case arrays are not of matching length
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      // compares each element of array 1 to its corresponding element in array 2
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }
}

module.exports = eqArrays;