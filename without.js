const without = function(source, itemsToRemove) {
  // take in 2 arrays
  // return a new array with ONLY elements from SOURCE that are NOT included in itemsToRemove
  let filtered = [];

  // outer loop to go through each element of source
  for (let i = 0; i < source.length; i++) {
    // default value is no matches for source element in itemsToRemove
    let itemMatch = 0;
    // inner loop goes through each element of itemsToRemove
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        itemMatch += 1;
      }
    }

    // pushes source[i] to new array ONLY if no match was found in itemsToRemove
    if (itemMatch === 0) {
      filtered.push(source[i]);
    }
  }

  return filtered;
};

module.exports = without;