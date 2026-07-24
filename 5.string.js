const name = "tanush";
const age = 20;

//console.log(`Hello my name is ${name} and I am ${age} years old.`);
// $ is used to insert variables into a string using template literals.

const str = new String("Hello World");
/*console.log(str.length); // returns the length of the string
console.log(str.toUpperCase()); // converts the string to uppercase
console.log(str.toLowerCase()); // converts the string to lowercase
console.log(str[0]); // returns the first character of the string
console.log(str.charAt(2)); // returns the character at the specified index
console.log(str.indexOf("o")); // returns the index of the first occurrence of the specified value
console.log(str.includes("Hello")); // returns true if the string contains the specified value
*/

const newstr = str.substring(0, 4); //4th index is not included in the substring
//console.log(newstr); // returns a new string that is a substring of the original string

const str1 = str.substring(-8, 4); // negative index is treated as 0
//console.log(str1); // returns a new string that is a substring of the original string

const newstr1 = "   tanush   ";
//console.log(newstr1); // returns the original string with leading and trailing whitespace
//console.log(newstr1.trim()); // returns the string with leading and trailing whitespace removed

const url = "https://www.tanush.com";
console.log(url.replace("https", "http")); // returns a new string with the specified value replaced

console.log(str.split(" ")); // returns an array of substrings split by the specified value
