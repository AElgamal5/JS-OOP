/*
 * Constructor function
 * constructor is a special method used to create and initialize objects from a class.
 * In JS we can have only one constructor in each class.
 * constructor function and class start with uppercase letter for best practice.
 */

function Phone(serial, color, price) {
  this.serial = serial;
  this.color = color;
  this.price = price;
}

const phone1 = new Phone(123, "Black", 500);
const phone2 = new Phone(456, "Red", 700);
const phone3 = new Phone(789, "Blue", 600);

console.log(phone1);
console.log(phone2);
console.log(phone3);

console.log("-".repeat(30));
//------------------------------------------------------//

function Product(serial) {
  this.serial = serial;
  //this is referred to the created object by the constructor
  console.log(this);
}

const prod1 = new Product(123);
const prod2 = new Product(456);
const prod3 = {
  serial: 789,
};

// To check an object is instance of class or constructor function
console.log(prod1 instanceof Product); // output: true
console.log(prod2 instanceof Product); // output: true
console.log(prod3 instanceof Product); // output: false => despite the 'prod3' object having the same property

//another way to check
console.log(prod1.constructor === Product); // output: true
console.log(prod3.constructor === Product); // output: false

console.log("-".repeat(30));
//------------------------------------------------------//

function Profile(firstName, lastName, age) {
  //props
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.phoneNo = "";

  //methods
  this.getFullName = function () {
    return `The full name: ${this.firstName} ${this.lastName}`;
  };
  this.setPhoneNo = function (phoneNo) {
    this.phoneNo = phoneNo;
  };
}

const profile1 = new Profile("Ahmed", "ElGamal", 23);
console.log(profile1.getFullName()); //output: 'The full name: Ahmed ElGamal'
profile1.setPhoneNo("+201234567890");
console.log(profile1.phoneNo); //output: '+201234567890'

console.log("-".repeat(30));
//------------------------------------------------------//

function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("Amir");
let user2 = new User("Ahmed");

//some built in constructor
// let obj1 = new Object({ a: 1 });
// let obj2 = new Object({ b: 2 });
let obj3 = { c: 3 };

let num1 = new Number(1);
let num2 = new Number(2);
let num3 = 3;

let str1 = new String("Osama");
let str2 = new String("Ahmed");
let str3 = "Mahmoud";
