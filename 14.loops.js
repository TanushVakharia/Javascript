// for loop
/*for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element);
}*/

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and Outer loop value ${i}`);
    //console.log(i + "*" + j + "=" + i * j);
  }
}

// while loop
//do while loop

let score = 1;
/*do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10); 
*/

// *************** High Order Array Loops *************** //

// 1) for of loop

const arr = [1, 2, 3, 4, 5];
/*for (const num of arr) {
  console.log(num);
}
*/
const greetings = "Hello Tanush !";
/*for (const greet in greetings) {
  console.log(`each char is ${greet}`);
}
*/

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};
/*for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
*/

const program = ["js", "cpp", "rb", "swift"];
/*for (const key in program) {
  console.log(program[key]);
}
*/

// 2) for each loop

const coding = ["js", "cpp", "rb", "swift"];
/*coding.forEach(function (val) {
  console.log(val);
});
*/

//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const newNums = myNums.filter((num) => num > 4);
//console.log(newNums);

/*const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumbers.map((num) => num + 10);
console.log(newNums);
const newNums1 = myNumbers.map((num) => num * 10).map((num) => num + 1);
console.log(newNums1);
*/
