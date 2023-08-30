const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

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

const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    console.log(`❌ Assertion Failed: ${object1} !== ${object2}`);
  }
};

// TEST CODE
const microwave = {
  power: 1000,
  colour: "silver",
  timer: true
};
const toaster = {
  slices: 3,
  colour: "silver",
  timer: true
};
const otherMicrowave = {
  colour: "silver",
  power: 1000,
  timer: true
}
assertObjectsEqual(microwave, otherMicrowave);
assertObjectsEqual(microwave, toaster);