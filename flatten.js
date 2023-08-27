/*
Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array. It will only handle one level of nesting.
*/

const flatten = function(array) {
  let flattenedArray = [];

  // go through each element of array
  // if the element is an array, loop through all the elements and push each one to flattened array
  // otherwise just push to flattened array

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flattenedArray.push(element[i]);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
}

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
}

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([['a', 'b'], [3], 'd']), ['a', 'b', 3, 'd']);