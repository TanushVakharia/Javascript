/*console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
*/

/*console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null == 0); // false
*/

// strict check ====
//console.log(2 === "2"); // false
//console.log(2 !== "2"); // true

// *************** Data Types Summary *************** //

// Primitives: 7 types: String, Number, BigInt, Boolean, undefined, Symbol, null

// Reference (Non-Primitives): Objects, Arrays, Functions, Dates, etc. (everything else)

// All Non-Primitives are Objects, but not all Objects are Non-Primitives. (e.g. Functions, Arrays, Dates, etc.)

//Symbol is a primitive data type that is used to create unique identifiers for objects.
// It is not a constructor and cannot be used with the new keyword.

//const id = Symbol("id");
//const id2 = Symbol("id");
//console.log(id === id2); // false

// Array
// const arr = [1, 2, 3, 4, 5];
// const heros = ["Iron Man", "Spider Man", "Thor", "Hulk"];

// Objects //inside curly braces  // also written inside let
// { name: "John", age: 30, city: "New York" }
// let myObj = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// Functions
// const myFunction = function() {
//   console.log("Hello World!");
// }
// myFunction(); // Hello World!

// ***************** Stack & Heap Memory *************** //

// Stack Memory: Stores primitive data types
// Heap Memory: Stores reference data types

//let myName = "Tanush";
//let anotherName = myName;
//console.log(myName); // Tanush
//console.log(anotherName); // Tanush

//Heap does not give copy of the object, it gives reference to the object in heap memory.
// So if we change the object, it will change for all references to that object.

//Stack gives copy of the primitive data type, if we change the value of one variable, it will not change the other variable.
