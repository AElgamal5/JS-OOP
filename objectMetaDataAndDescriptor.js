/*
 * Object Meta Data
 * writable => ability to change the value
 * enumerable => ability to loop on he property
 * configurable => ability to delete or modify prop descriptors
  ===================
 * Object.defineProperty(obj, prop, descriptor)
 * used to add or modify exist prop
 * All descriptors when using 'Object.defineProperty' or 'Object.defineProperties' are false
 * All descriptors when add a prop using the normal way are true
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  value: 3,
  writable: false,
  enumerable: true,
  configurable: true,
});

//writable: true,
// enumerable: true,
// configurable: true,
console.log(myObject.c); //output: 3
myObject.c = 5;
console.log(myObject.c); //output: 5

console.log("-".repeat(30));

//writable: false,
// enumerable: true,
// configurable: true,
myObject.c = 5;
console.log(myObject.c); //output: 3

console.log("-".repeat(30));

//writable: false,
// enumerable: true,
// configurable: true,
for (const key in myObject) {
  console.log(key, myObject[key]);
}
//output: a 1, b 2, c 3

console.log("-".repeat(30));

//writable: true,
// enumerable: false,
// configurable: true,
for (const key in myObject) {
  console.log(key, myObject[key]);
}
//output: a 1, b 2

console.log("-".repeat(30));
//get all props names
console.log(Object.getOwnPropertyNames(myObject)); //output: (3) ['a', 'b', 'c']
console.log(Object.getOwnPropertyDescriptors(myObject)); //output: array of each prop and its descriptors
console.log(Object.getOwnPropertyDescriptor(myObject, "a")); //output: descriptors for one prop

console.log("-".repeat(30));

//writable: true,
// enumerable: true,
// configurable: true,
console.log(delete myObject.c); //output: true => delete the prop successfully

console.log("-".repeat(30));

//writable: true,
// enumerable: true,
// configurable: false,
console.log(delete myObject.c); //output: false => delete the prop unsuccessfully

Object.defineProperty(myObject, "c", {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: true,
});
//output: Cannot redefine property: c => can't re-configure the prop because 'configurable: false' first

console.log("-".repeat(30));

//change th value even the writable is false
//writable: false,
// enumerable: true,
// configurable: true,
Object.defineProperty(myObject, "c", {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: true,
});
console.log(myObject.c); //output: 30
