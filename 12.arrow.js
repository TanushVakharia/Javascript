const user = {
  username: "tanush",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    //console.log(this);
    // this referes to your current context and only works inside objects not functions
  },
};
//user.welcomeMessage();
//user.username = "vakharias"; //changed username to vakharias
//user.welcomeMessage();

//console.log(this);

//arrow function
/*const chai = () => {
  let username = "tanush";
  console.log(this);
};
chai();
*/

//const addTwo = (num1, num2) => num1 + num2; // directly gives output no need of curly braces and return
//const addTwo = (num1, num2) => ({ username: "tanush" }); // need t use curly braces for objects
//console.log(addTwo(3, 4));

// Immediately Invoked Function Expressions (IIFE) //

/*to directly execute function isntead of calling function()
write like this ()() function inside first bracket and next bracket as it is for execution
*/
