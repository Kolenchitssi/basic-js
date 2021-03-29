const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let cat1 = 0;

  // let cat = 0;
  // for (item of arr) {
  //   item
  //   cat = item.reduce((res, element) => {
  //     if (element == "^^") {
  //       res += 1;
  //     }
  //     return res;
  //   }, 0)
  //   // console.log(arr)
  //   cat1 += cat
  // }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "^^") cat1 += 1;
    }
  }
  return cat1;
}