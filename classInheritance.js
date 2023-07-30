/*
 * Class inheritance
 */

//parent class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return `Hi ${this.name}`;
  }
  getAge() {
    return this.age;
  }
  writeMsg() {
    return "Msg from User class";
  }
}

//child class
class Admin extends User {
  constructor(name, age, state) {
    //parent constructor
    super(name, age);
    //prop to child class only
    this.state = true;
  }
  //add new methods
  adminMsg() {
    return `You are Admin`;
  }
  //overwrite the old methods
  writeMsg() {
    return "Msg from Admin class";
  }
}

const admin1 = new Admin("Amir", 23);
const user1 = new User("ElGamal", 23);

console.log(admin1);
console.log(admin1.name); //output: "Amir"
console.log(admin1.age); //output: 23
console.log(admin1.state); //output: true
console.log(admin1.sayHi()); //output: "Hi Amir"
console.log(admin1.adminMsg()); //output: "You are Admin"

console.log(admin1.writeMsg()); //output: "Msg from Admin class"
console.log(user1.writeMsg()); //output: "Msg from User class"
