const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here 

    // if (Array.isArray(arr)) {
    //   result = 1 + Math.max(0, ...arr.map(calculateDepth));
    //   return result;
    // } else {
    //   return 0;
    // }

    let result = 1;
    let depth = 0;
    for (let i of arr) {
      if (Array.isArray(i)) {
        result = this.calculateDepth(i);
        if (depth < result) {
          depth = result;
        }
      }
    }
    return ++depth;
  };
}

