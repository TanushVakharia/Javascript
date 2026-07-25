const myArr = [0, 1, 2, 3, 4, 5];
//in java array makes a shallow copy of the array when assigned to another variable
//sharing the same reference point

const myArr2 = new Array(1, 2, 3, 4);

//console.log(myArr)
//console.log(myArr2[1]); // output 1

//myArr.push(6);
//myArr.push(7);
//myArr.pop(); // removes the last element from the array
//console.log(myArr) // output [0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9); // adds element 9 to the beginning of the array
myArr.shift(); // removes the first element from the array
//console.log(myArr) // output [0, 1, 2, 3, 4, 5, 6]

//console.log(myArr.includes(9));
//console.log(myArr.indexof(3))

const newArr = myArr.join(); //changes type to string

// slice, splice
/*console.log("A", myArr);
const myn1 = myArr.slice(1, 3); //does not include last element and no changing in main array
console.log(myn1); // output [1,2]
console.log("B", myArr); // prints complete original array
const myn2 = myArr.splice(1, 3); // does include last element and changes original arrat
console.log(myn2); // output [1,2,3]
console.log("C", myArr); // as splice done now array prints [0,4,5]
*/

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const all_heros = marvel_heros.concat(dc_heros); // merges two arrays
//console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]; //merges two arrays
//console.log(all_new_heros);

const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
//console.log(arr1.flat(Infinity)); // make them a single arrat

//console.log(Array.from("Tanush"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //creates an array of [100,200,300]
