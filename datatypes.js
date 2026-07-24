"use strict"; //treat all JS code as newer version of JS
console.log(3 + 3); //output 6  //if you write "3+3" you will get output as 3+3 because it will treat it as string concatenation
let name = "Tanush"; //string data type
let age = 20; //number data type
let isAdult = true; //boolean data type
let address = null; //null data type //standalone value
let phoneNumber; //undefined data type //not assigned any value yet

console.log(name, age, isAdult);
console.log(address);
console.log(phoneNumber);

//object data type
console.log(typeof name); //output string
console.log(typeof address); //output object //null is an object in JS
console.log(typeof phoneNumber); //output undefined
