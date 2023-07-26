/*
 * loop over object properties using for in loop
 * The loop will not iterate over non-enumerable properties,
 * such as properties created with Object.defineProperty() and specifying enumerable: false.
 * Not recommended to use the for...in loop for arrays
 */

const user = {
  name: "Amir",
  age: 23,
  city: "Alexandria",
};

for (let key in user) {
  console.log(key); //output: 'name' , 'age' & "city" => keys
  console.log(user[key]); //output: 'Amir' , 23 & "Alexandria" => values
}
