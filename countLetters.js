const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result = {};

  return result;
}

// TEST CODE
const testResult = countLetters("lighthouse in the house");
assertEqual(testResult["l"], 1);
assertEqual(testResult["h"], 4);
assertEqual(testResult["e"], 2); // should fail