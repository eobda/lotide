const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  const text = sentence.split(" ").join("").toLowerCase();

  for (const letter of text) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}

// TEST CODE
const testResult = countLetters("lighthouse in the house");
assertEqual(testResult["l"], 1);
assertEqual(testResult["h"], 4);
assertEqual(testResult["e"], 3);
assertEqual(testResult["n"], 1);