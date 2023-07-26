/*
 * Defining object using Object.assign()
 * Object.assign() is a method in JavaScript that is used to copy the values of all
 * enumerable properties from one or more source objects into a target object.
 * It is commonly used for shallow copying objects or merging multiple objects into one.
 * Object.assign(target, ...sources);
 */

const src1 = {
  prop1: "value1",
  prop2: "value2",
  method1: function () {
    return "method1";
  },
};

const src2 = {
  prop3: "value3",
  prop4: "value4",
  method2: function () {
    return "method2";
  },
};

const target = {
  prop5: "value5",
};

//copy all properties and methods from 'src1' to 'target'
// Object.assign(target, src1);

//copy all properties and methods from 'src1' & 'src2' to 'target'
// Object.assign(target, src1, src2);

//incase there is property with the same name in two or more source objects
// last one will be assigned => (prop1: "value1 mod")
// Object.assign(target, src1, src2, { prop1: "value1 mod" });
// console.log(target);

//no need for target object
// myObj will got the all properties and methods from source objects
const myObj = Object.assign({}, src1, src2);
console.log(myObj);
