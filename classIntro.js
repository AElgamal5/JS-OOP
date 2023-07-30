/*
 * Class syntax and introduction
 */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //methods of the class
  sayHi() {
    return `Hi ${this.name}`;
  }
  getAge() {
    return this.age;
  }
}

let user1 = new User("Amir", 23);
let user2 = new User("ElGamal", 23);

console.log(user1);
console.log(user2);
