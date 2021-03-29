const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (str === null) str = "null";//строка для повторения
  if (!str) return false//строка для повторения
  if (!options.repeatTimes) options.repeatTimes = 1//устанавливает количество повторений str    
  if (!options.separator) options.separator = "+"//трока, разделяющая повторы str
  if (options.addition === false) options.addition = "false";
  if (options.addition === null) options.addition = "null";
  if (!options.addition) options.addition = ""//дополнительная строка, которая будет добавляться к каждому повторению str
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1//задает количество повторений сложения
  if (!options.additionSeparator) options.additionSeparator = "|"//строка, разделяющая повторения сложения
  str = String(str);
  options.addition = String(options.addition);
  let result = "";
  options.addition = String(options.addition);
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    for (j = 0; j < options.additionRepeatTimes; j++) {
      result += options.addition;
      if (j !== (options.additionRepeatTimes - 1)) result += options.additionSeparator;
    }
    if (i !== (options.repeatTimes - 1)) result += options.separator;
  }
  return result;


};

// Параметры str и addition по умолчанию являются строками. В случае, если тип этих параметров отличается, они должны быть преобразованы в строку.
// параметры separator и additionSeparator являются строками.
// repeatTimes и additionRepeatTimes-это целые числа (при отсутствии любого из них соответствующая строка не повторяется).
// Единственным обязательным параметром является str, любые другие могут быть не определены. значение по умолчанию разделителя -"+". Значение по умолчанию additionSeparator -"|".