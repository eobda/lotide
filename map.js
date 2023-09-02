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

const map = function(array, callback) {
  // function should return a new array
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results; 
}

// test code
const words = ["every", "good", "boy", "deserves", "fudge"];
assertArraysEqual(map(words, word => word[0]), ['e', 'g', 'b', 'd', 'f']);

const nums = [1, 2, 3, 4];
assertArraysEqual(map(nums, num => num * 2), [2, 4, 6, 8]);

const cheeses = [
  { name: "Stilton",
  country: "England"},
  { name: "Gruyere",
  country: "Switzerland"},
  { name: "Brie",
  country: "France"}
];
assertArraysEqual(map(cheeses, cheese => cheese.country), ["England", "Switzerland", "France"]);