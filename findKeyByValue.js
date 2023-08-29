const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objName, value) {
  // should return undefined if value is not found
  let result = undefined;
  const keys = Object.keys(objName);

  // loop through objName[keys] and if it equals value, result = key
  for (const key of keys) {
    if (objName[key] === value) {
      result = key;
    }
  }

  return result;
};

// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const foodGroups = {
  protein: "beans",
  carb: "rice",
  vegetable: "broccoli",
  fat: "butter"
};

assertEqual(findKeyByValue(foodGroups, "beans"), "protein");
assertEqual(findKeyByValue(foodGroups, "broccoli"), "vegetable");
assertEqual(findKeyByValue(foodGroups, "tide pod"), undefined);