const eqArrays = require('./eqArrays');

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
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;