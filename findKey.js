const findKey = function(object, callback) {
  for (const key in object) {
    // Look for the FIRST key for which the callback returns a truthy value
    if (callback(object[key])) {
      // Return key of that callback
      return key;
    }
  }

  // If key is not found, return undefined
  return undefined;
};

module.exports = findKey;