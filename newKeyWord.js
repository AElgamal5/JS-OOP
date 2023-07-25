/*
 * Defining object using new keyword
 */

let user = new Object();

user.firstName = "Ahmed";
user.lastName = "ElGamal";
user["age"] = 23;

user.getAge = function () {
  return this.age;
};

console.log(user);
console.log(user.getAge());
