/*
 * Defining object using object literal
 */

let user = {
  // * properties
  name: "ElGamal",
  age: 23,
  // * nested object
  addresses: {
    EG: "Alexandria",
    UK: "London",
    KSA: "Mecca",

    getEGAddress: function () {
      return this.EG;
    },
  },

  // * methods
  getName: function () {
    return this.name;
  },
  getName2: () => this.name,
  getName3: function () {
    return user.name;
  },
  getName4: () => user.name,
};

// * access object properties
// console.log(user.name); //dot notation
// console.log(user.addresses.EG);
// console.log(user["name"]); // bracket notation
// console.log(user["addresses"]["EG"]);

// * access object methods
// console.log(user.getName()); //output: 'ElGamal'
// console.log(user.getName2()); //output: undefined 'this' does not work with the arrow function
// console.log(user.getName3()); //output: 'ElGamal'
// console.log(user.getName4()); //output: 'ElGamal'
console.log(user.addresses.getEGAddress()); //output: 'Alexandria'
