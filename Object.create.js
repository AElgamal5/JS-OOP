/*
 * Defining object using Object.create()
 * used to create a new object form old one called "prototype" with the ability to add new properties
 * Object.create(proto, [propertiesObject]);
 */

let mainObj = {
  discount: true,
  getMsg: function () {
    return `You ${this.discount ? "" : "Don't "}have discount`;
  },
};

console.log(mainObj.discount);
console.log(mainObj.getMsg());

let otherObj = Object.create(mainObj);
//same values of mainObj
console.log(otherObj.discount);
console.log(otherObj.getMsg());
//change only to otherObj
otherObj.discount = false;
console.log(otherObj.discount);
console.log(otherObj.getMsg());

let lastObj = Object.create(mainObj);
//same values of mainObj
console.log(lastObj.discount);
console.log(lastObj.getMsg());
