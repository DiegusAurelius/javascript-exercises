const reverseString = function (string) {
  let arr = string.split('');
  let reversed = '';
  for (let i = 1; i <= string.length; i++) {
    reversed += arr[string.length - i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
