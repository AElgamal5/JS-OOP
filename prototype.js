/*
 * Prototype in JS

 * Every function, by default, has a property called prototype.

 * When you use a function as a constructor to create objects using the new keyword,
 * the new objects inherit properties and methods from the function's prototype object.
 * This forms the basis of prototypal inheritance in JavaScript,
 * allowing you to share behavior and data between objects.
 */

function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("ElGamal");
let user2 = new User("Ahmed");

console.log(User.prototype);
// output:
// inside prototype there is and property called 'constructor'  and it value is the constructor function
// constructor: ƒ User(name)
// [[Prototype]]: Object

console.log("-".repeat(30));

function hi() {
  return "hi";
}
console.log(hi.prototype);
// output:
// constructor: ƒ hi()
// [[Prototype]]: Object

console.log("-".repeat(30));

const array = [1, 2, 3, 4, 5];

//To get which constructor made this array
console.log(array.constructor); //output: ƒ Array() { [native code] }
//see the prototype of the constructor
console.log(Array.prototype); //output: (all the methods and properties for the array)
//each new array created by 'Array' constructor will inherit all the methods and properties of that constructor
console.log(array.length); //output: 5
