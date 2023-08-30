const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // keys should be sorted so it doesn't matter what order they appear in the original object
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

  // default return is false
  // should only return true if objects are the same length!
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);