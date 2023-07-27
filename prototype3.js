/*
 * Prototype in JS

 * mission: add a function to 'String' object called "zFill" that take 'width' input
 * and fill the rest of the string with 0's
 */

console.log(String.prototype);

let myStr = "123";

String.prototype.zFill = function (width) {
  let result = this;
  if (this.length < width) {
    result = `${"0".repeat(width - this.length)}`.concat(result);
  }
  return result.toString();
};

console.log(myStr.zFill(5)); //output: '00123'

String.prototype.sayHi = function () {
  return `Hi ${this}`;
};

console.log("Ahmed".sayHi()); //output: 'Hi Ahmed'
