/*
 * Prototype in JS

 * Add to prototype chain
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

console.log(user1);

//add a function to 'User' constructor using prototype
//it will appear with the constructor function inside User.prototype
//and will appear to each instance of this constructor inside prototype object
User.prototype.hi = function () {
  return `Hi ${this.name}`;
};

//to access this new method
//JS engin at first will search for 'hi()'function inside the constructor
//if not find it will search inside the prototype and so on
console.log(user1.hi()); //output: 'Hi ElGamal'

console.log("-".repeat(30));

//adding a property to all objects and it will be accessed by every object
console.log(Object.prototype);
Object.prototype.myName = "ElGamal";

let obj = {
  key1: "value1",
  key2: "value2",
};

console.log(obj.myName); //output: 'ElGamal'
console.log(user2.myName); //output: 'ElGamal'

let num = 5;
let array = [1, 2, 3];
console.log(array.myName); //output: 'ElGamal'
console.log(num.myName); //output: 'ElGamal'
