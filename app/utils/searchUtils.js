/**
 *
 * @param {Object} searchValues
 * @param {Array} library
 */
function query (searchValues, library) {
  var result = Array.from(library);
  for (let key in searchValues) {
    let searchedValue = searchValues[key].toLowerCase();
    for (let i = 0; i < result.length; i++) {
      if (
        result[i][key] &&
        result[i][key].toLowerCase().indexOf(searchedValue) < 0
      ) {
        result.splice(i, 1);
        i -= 1;
      }
    }
  }
  return result;
};

module.exports.query = query;
