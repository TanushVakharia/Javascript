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
console.log(booleanisLoggedIn);
