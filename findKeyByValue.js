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

module.exports = findKeyByValue;