let myObj = {
  One: 1,
  "Two!": 2,
};

// * bracket notation can deal with special characters
// console.log(myObj.One); // output: 1
// console.log(myObj."One"); // output: Syntax Error
// console.log(myObj.Two!); // output: Syntax Error
// console.log(myObj["One"]); // output: 1
// console.log(myObj["Two!"]); // output: 2

//----------------------------------------------------

let myObj2 = {
  1: "one",
  2: "two",
};

// console.log(myObj2.1); // output: Syntax Error
// console.log(myObj2[1]); // output: 'one'
// console.log(myObj2["1"]); // output: 'one'

//----------------------------------------------------

let myVar = "name";

let myObj3 = {
  name: "Ahmed",
};

console.log(myObj3.myVar); // output: undefined
console.log(myObj3[myVar]); // output: 'Ahmed'
