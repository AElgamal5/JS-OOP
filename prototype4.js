/*
  Prototype
  [1] Every Object Has A Prototype
  [2] Prototype Chain Ends With Object.prototype
  [2] In Javascript Function Is Object
*/

function User(name) {
  /*
    [1] Create Empty Object
    [2] Assign The New Object To this Context
    [3] New Object Created Prototype = Function Prototype
    this = {};
    this.__proto__ = User.__proto__
  */
  this.name = name;
  /*
    [4] Return The New Object
    return this
  */

  // if (!(this instanceof User)) {
  // throw new Error("Must Be Called With New Keyword");
  //   console.log("Error");
  // }

  // ES6
  if (!new.target) {
    // throw new Error("Must Be Called With New Keyword");
    console.log("Error");
  }
}

let user1 = new User("Amir");
let user2 = new User("Ahmed");
console.log(User.prototype);
console.log(user1);

let myArray = [1, 2, 3, 4];
