const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
// Scan the object and return the FIRST key for which the callback returns a truthy VALUE
// If key is not found, should return undefined
  // const keys = Object.keys(object);
  for (const key in object) {
    console.log("callback:", callback(object[key]));
    if (object[key] === callback) {
    }
  }
};

// test code
const testCode = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
assertEqual(testCode, "noma");