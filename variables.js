const accountId = 144553; //constant once declared cannot be changed
let accountEmail = "emailid@gmail.com"; //let variable can be changed
var accountPassword = "password123"; //var variable can be changed and is function scoped
//prefer not to use var as it is function scoped and can lead to unexpected behavior in larger codebases
accountCity = "Jaipur";
let accountState; //nothing so output undefined

accountEmail = "mypass.com";
accountPassword = "newpassword123";
accountCity = "Mumbai";
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]); //output in table form altogether
