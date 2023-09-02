const words = ["every", "good", "boy", "deserves", "fudge"];

const map = function(array, callback) {
  // function should return a new array
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results; 
}

// test code
const results1 = map(words, word => word[0]);
console.log(results1);