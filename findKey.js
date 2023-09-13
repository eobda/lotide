// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKey = function(object, callback) {
  for (const key in object) {
    // Look for the FIRST key for which the callback returns a truthy value
    if (callback(object[key])) {
      // Return key of that callback
      return key;
    }
  }

  // If key is not found, return undefined
  return undefined;
};

// test code
// const testCode = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"
// assertEqual(testCode, "noma");

// const testCode2 = findKey({
//   "Stilton": { country: "England" },
//   "Gruyere": { country: "Switzerland" },
//   "Brie": { country: "France" },
//   "Manchego": { country: "Spain" }
// }, x => x.country[0] === "S");
// assertEqual(testCode2, "Gruyere");

module.exports = findKey;