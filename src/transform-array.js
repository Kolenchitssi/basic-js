const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error('Incorrect array');
  }

  if (arr.length === 0) {
    return [];
  }

  let arr1 = [...arr];
  let len = arr.length;
  let i = 0;
  let result = [];

  while (i < len) {
    switch (arr[i]) {
      case "--discard-next"://исключает следующий элемент массива из преобразованного массива.
        arr1[i + 1] = "fullProcessed";
        ++i;
        break;
      case "--discard-prev"://исключает предыдущий элемент массива из преобразованного массива.
        if (i > 0 && arr1[i - 1] != "fullProcessed") {

          result.pop();
          arr1[i - 1] = "fullProcessed";
        }

        break;
      case "--double-next"://удваивает следующий элемент массива в преобразованном массиве.
        if (i < len - 1 && arr1[i + 1] != "fullProcessed") {//тут проверить на 1 из 4 ключей
          result.push(arr[i + 1]);

        }

        break;
      case "--double-prev": //удваивает предыдущий элемент массива в преобразованном массиве.
        if (i > 0 && arr1[i - 1] != "fullProcessed") {
          result.push(arr[i - 1]);

        }

        break;

      default:
        result.push(arr[i]);
        break;
    }
    ++i;
  }

  return result;
};
