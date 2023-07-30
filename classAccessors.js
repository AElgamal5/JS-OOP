/*
 * Class accessors getters & setters
 * used to deal with private properties
 */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return `Hi ${this.name}`;
  }

  //when use 'get' keyword 'showInfo' converted from method to computed property
  get showInfo() {
    return `Name: ${this.name} and your age: ${this.age}`;
  }

  changeName(name) {
    this.name = name;
  }

  //dynamic property
  set changeAge(age) {
    this.age = age;
  }
}

const user1 = new User("Amir", 23);

console.log(user1);

// console.log(user1.showInfo()); //output: error: user1.showInfo is not a function
console.log(user1.showInfo); //output: "Name: Amir and your age: 23"

user1.changeName("ElGamal");
console.log(user1.name); //output: "ElGamal"

user1.changeAge = "40";

console.log(user1.age); //output: 40

console.log("-".repeat(30));

class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  set changeName(name) {
    this.#name = name;
  }

  get age() {
    return this.#age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.getName()} and I am ${this.getAge()} years old.`
    );
  }
}

const john = new Person("Gamal", 30);
// console.log(john.#name); -> error
console.log(john.name); //output: "Gamal"
john.changeName = "Amir";
console.log(john.name); //output: "Amir"
