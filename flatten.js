const flatten = function(array) {
  let flattenedArray = [];

  // go through each element of array
  // if the element is an array, loop through all the elements and push each one to flattened array
  // otherwise just push to flattened array

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flattenedArray.push(element[i]);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

module.exports = flatten;