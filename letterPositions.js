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

// return all the indices (zero-based positions) in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};

  // result should look like: { a: [0, 1, 2], b: [3, 4, 5] }
  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(sentence[letter]);
      } else {
        results[letter] = [ sentence[letter] ];
      }
    }
  }

  return results;
};

// TEST CODE
assertArraysEqual(letterPositions("abcd")["a"], [0]);