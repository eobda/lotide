const without = function(source, itemsToRemove) {
  // take in 2 arrays
  // return a new array with ONLY elements from SOURCE that are NOT included in itemsToRemove
  let filtered = [];

  // outer loop to go through each element of source
  for (let i = 0; i < source.length; i++) {
    // default value is no matches for source element in itemsToRemove
    let itemMatch = 0;
    // inner loop goes through each element of itemsToRemove
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        itemMatch += 1;
      }
    }

    // pushes source[i] to new array ONLY if no match was found in itemsToRemove
    if (itemMatch === 0) {
      filtered.push(source[i]);
    }
  }

  return filtered;
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
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);