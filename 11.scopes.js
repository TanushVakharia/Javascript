if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
/*console.log(a); // no ooutput as defined inside if
console.log(b); // no ooutput as defined inside if
console.log(c); // still gives output 30 as type is var not let or const
*/

function one() {
  const username = "tanush";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website); //cant give output as defined inside fucntion two
  two();
}
//one();

if (true) {
  const username = "tanush";
  if (username === "tanush") {
    const website = " youtube";
    console.log(username + website);
  }
  //console.log(website);
}
//console.log(username);

// ******************** Interesting Question ******************** //

function addone(num) {
  return num + 1;
}
console.log(addone(5)); // can also execute if written above function before defining the function

constaddTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5)); // cant execute if written above because this is a expression written as function
