const map = function(array, callback) {
  // function should return a new array
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;