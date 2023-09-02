const takeUntil = function(array, callback) {
  // should output a fresh array
  let result = [];

  for (const element of array) {
    // once the callback is truthy, stop running the code and return the result
    if (callback(element)) {
      return result;
    } else {
      // add the elements of the array to the result while the callback result is not truthy
      result.push(element);
    }
  }
};

// test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // expected output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // expected output: [ 'I've', 'been', 'to', 'Hollywood' ]