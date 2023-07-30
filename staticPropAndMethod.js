/*
 * Class static properties and methods:
 * features allow you to define properties and methods that are associated with the class itself
 * not to the instances of the class
 *
 */

class User {
  //static properties
  static counter = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;

    User.counter++;
  }

  //methods of the class
  sayHi() {
    return `Hi ${this.name}`;
  }
  getAge() {
    return this.age;
  }

  //static methods
  static getCounter() {
    //this in static methods refers to the class

    return this.counter;
  }
}

console.log(typeof User); //output: "function"
console.log(User === User.prototype.constructor); //output: true

//Must use 'new' keyword to create object form a class
// const user1 = User("ElGamal", 23); //error

const user1 = new User("ElGamal", 23);

// console.log(user1.getCounter()); //output: error: user1.getCounter is not a function
console.log(User.getCounter()); //output: 1

const user2 = new User("ElGamal", 23);
const user3 = new User("ElGamal", 23);

console.log(User.getCounter()); //output: 3
