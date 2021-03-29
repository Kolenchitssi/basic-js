const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(encryptedMessage, key) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!key || !encryptedMessage) {
      throw new Error('parameter not entered: messege or key');
    }
  }
  decrypt(decryptedMessage, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!key || !decryptedMessage) {
      throw new Error('parameter not entered: messege or key');
    }
  }
}

module.exports = VigenereCipheringMachine;
