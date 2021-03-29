const CustomError = require("../extensions/custom-error");

const chainMaker = {
  myArr: [],

  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.myArr.length;
  },

  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (value === null) {
      this.myArr.push('( null )');
    } else
    // if (value === 0 || isNaN(value) || value === false) {
    {
      value = String(value);
      this.myArr.push("( " + value + " )");
    }

    return this;

  },

  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here 

    if (position > 1 || position <= this.getLength()) {
      this.myArr.splice(position - 1, 1);
      return this;
    } else {
      this.myArr = [];
      throw new Error('Incorrect position');
    }

  },

  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.myArr.reverse();
    return this;
  },

  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let result = [];

    result = this.myArr.join("~~");
    this.myArr = [];
    return result;

  }
};

module.exports = chainMaker;
