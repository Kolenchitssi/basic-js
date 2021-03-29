const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!date) { return "Unable to determine the time of year!"; }
  // if (typeof data === undefined) { return "Unable to determine the time of year!"; }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('date is not correct')
  }

  let month = date.getMonth();

  if (month == 11 || month < 2) {
    return "winter";
  }
  if (month >= 2 && month < 5) {
    return "spring";
  }
  if (month >= 5 && month < 8) {
    return "summer";
  }
  if (month >= 8 && month < 11) {
    return "autumn";
  }

};
