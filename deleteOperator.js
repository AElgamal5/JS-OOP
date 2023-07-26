/*
 * Delete operator
 * delete operator is used to remove a property from an object or to delete an element from an array.
 * delete object.property;
 * delete array[index];
 */

const user = { name: "ElGamal" };

console.log(user);
console.log(user.name);

// delete user; // does not affect the object

// same as delete user["name"]
delete user.name; // return true if deleted else false

console.log(user); //output: {}
console.log(user.name); //output: undefined

console.log("-".repeat(20));

/*
 *Object.freeze() is a method in JavaScript that is used to make an object immutable,
 *preventing any further changes to its properties.
 *Once an object is frozen, you cannot add, delete, or modify its existing properties.
 *The Object.freeze() method affects only the object itself and not its prototype chain.
 */

let obj = { prop1: "value1" };
Object.freeze(obj);
console.log(delete obj.prop1); //output: false

console.log("-".repeat(20));

//create empty object
const obj2 = {};
//adding property to obj2 using Object.defineProperty()
Object.defineProperty(obj2, "prop", { value: "value", configurable: false });

console.log(obj2.prop); //output: 'value'
console.log(delete obj2.prop); //output: false
