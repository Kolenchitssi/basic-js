const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  // if (!members) return false;
  if (!Array.isArray(members)) return false;
  result = [];
  for (item of members) {
    if (typeof (item) == "string") {
      item = item.trim();
      result.push(item[0].toUpperCase());
    }
  }
  let a = result.sort().join("")
  if (a.length === 0) return false;
  return a;
};
