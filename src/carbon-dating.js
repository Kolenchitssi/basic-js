const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof (sampleActivity) !== "string") return false;
  if (!sampleActivity || sampleActivity == Infinity) return false;
  sampleActivity = +sampleActivity;
  if (sampleActivity <= 0 || sampleActivity > 15) return false;
  if (typeof (sampleActivity) === 'number' && sampleActivity === sampleActivity) {
    let t1 = (Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
    // console.log(sampleActivity + "-----" + Math.ceil(t1));
    return Math.ceil(t1);
  }
  else return false;
};

