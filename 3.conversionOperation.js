let score = "33";
//console.log(score); //output 33 but string
//console.log(typeof score);

let valueinNumber = Number(score); //output 33 but number
//console.log(valueinNumber);
//console.log(typeof valueinNumber);

let valueinString = String(valueinNumber); //output 33 but string
//console.log(valueinString);
//console.log(typeof valueinString);

let isLoggedIn = "0"; //string //empty string false anything inside string true
let booleanisLoggedIn = Boolean(isLoggedIn); //output true because string is not empty
//console.log(booleanisLoggedIn);

// ********************* Operations ********************* //

let value = 3;
let negValue = -value; //output -3
//console.log(value);
//console.log(negValue);

//basic math operations can be done inside console.log() as well
// addition multiplicaton division subtraction modulus all of these operations can be done with numbers and strings as well
/*console.log(value + 5); //output 8
console.log(value * 2); //output 6
console.log(value / 3); //output 1
console.log(value - 1); //output 2
console.log(value % 2); //output 1
*/

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; //output "Hello World"
//console.log(str3);

/*console.log("1" + 1); //output 11 because string + number = string
console.log(1 + "1"); //output 11 because number + string = string
console.log("1" + 1 + 1); //output 111 because string + number = string and then string + number = string
console.log(1 + 1 + "1"); //output 21 because number + number = number and then number + string = string
*/

//console.log(true);
//console.log(+true); //output 1 because true = 1
// same for false and +false = 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; //output 4
//console.log(num1, num2, num3); //output 4 4 4

let gameCounter = 100;
gameCounter++; //output 101 //same for ++gameCounter //prefix and postfix
console.log(gameCounter);
