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

module.exports = takeUntil;