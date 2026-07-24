const score = 400;
const balance = new Number(100);

//console.log(score - balance); // output 300
//console.log(balance.toString().length); // output 3 as converted now to string
//console.log(balance.toFixed(2)); // output 100.00 as converted now to string with 2 decimal points
//console.log(balance.toPrecision(2)); // output 1.0e+2 as converted now to string with 2 significant digits

// *************** MATH OBJECT *************** //

/*console.log(Math); // output Math object with all its methods and properties
console.log(Math.abs(-4)); // output 4 as absolute value of -4
console.log(Math.ceil(4.2)); // output 5 as rounded up value of 4.2
console.log(Math.floor(4.8)); // output 4 as rounded down value of 4.8
console.log(Math.round(4.5)); // output 5 as rounded value of 4.5
console.log(Math.max(4, 8, 2, 6)); // output 8 as maximum value among the numbers
console.log(Math.min(4, 8, 2, 6)); // output 2 as minimum value among the numbers
*/

//console.log(Math.random()); // output random number between 0 and 1
//console.log(Math.random() * 10 + 1); // output random number between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // output random number between 10 and 20
