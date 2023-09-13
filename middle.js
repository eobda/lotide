/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
*/
const middle = function(array) {
  let middleOfArray = [];
  // should return an array
  // for arrays with 1 or 2 elements, there is no middle - return empty

  if (array.length > 2) {
    // for odd number, single middle element should be returned
    // for even number, 2 middle elements should be returned
    // use array.length / 2 to measure where the middle is

    let centre = array.length / 2;

    // (array.length / 2) - 0.5 if odd
    // (array.length / 2) - 1 and (array.length / 2) if even

    if (array.length % 2 === 0) {
      middleOfArray.push(array[centre - 1], array[centre]);
    } else {
      middleOfArray.push(array[centre - 0.5]);
    }
  }

  return middleOfArray;
};

module.exports = middle;