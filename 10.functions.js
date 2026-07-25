function sayMyName() {
  console.log("T");
  console.log("A");
  console.log("N");
  console.log("U");
  console.log("S");
  console.log("H");
}
//sayMyName(); // execution

function add2Numbers(num1, num2) {
  let result = num1 + num2;
  return result;
}
//add2Numbers(3, 4); // output 7

const result = add2Numbers(3, 5);
//console.log(result); //undefined for that you need to write in function first

function loginUser(username) {
  if (username === undefined) {
    // also written as !username
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`; // ${} is used for variable
}
//console.log(loginUser("Tanush")); //output for only return $ part
//console.log(loginUser()); // output for the if part

function calculatePrice(...num1) {
  // ... is a rest operator
  return num1;
}
//console.log(calculatePrice(200, 400, 500)); // due to rest operator it prints all 3 data even if variable is only 1
//say we have this (val1, val2, ...num1) instead of (...num1) then output is
// only 500 as val1=200 val2=400 and num1 = 5-- and returns num1

const user = {
  username: "Tanush",
  price: "99",
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and Price is ${anyObject.price}`,
  );
}

//handleObject(user);

const mynewArr = [300, 400, 500, 600];
function retval(getArray) {
  return getArray[1];
}
console.log(retval(mynewArr));
