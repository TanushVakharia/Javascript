//declaraing symbol
const mySym = Symbol("key1");

const JsUser = {
  name: "Tanush",
  age: 20,
  location: "Mumbai",
  email: "tanush@gmail.com",
  //[mySym]: "myKey1",
}; //this is the way we create an object

//console.log(JsUser["name"]); // output Tanush
//console.log(JsUser[mySym]);

JsUser.email = "vakharia@gmail.com"; // changing the mail id
//console.log(JsUser["email"]);
//Object.freeze(JsUser); // freezes the object and if you try making changes further now it wont change

JsUser.greeting = function () {
  //console.log("Hello JS user");
};
//console.log(JsUser.greeting());

//const tinderUser = new Object() //singleton object
const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Tanush";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Tanush",
      lastname: "Vakharia",
    },
  },
};
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname); //output Tanush only

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

//const obj3 = Object.assign(obj1, obj2, obj4); // copies all enumerable own properties frome one or more source to target objects returning modifed targeted object
//console.log(obj3);

const obj3 = { ...obj1, ...obj2 }; //same mergeing like in array
//console.log(obj3);

//lets say we have objects inside array
/*const users [
    {
        email: "xyz@gmail.com"
    }
    {

    }
    {

    }
]
*/
//to access objects we can use like this --> users[1].email, etc for others

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Tanush",
};

const { courseInstructor } = course;
//console.log(courseInstructor);

//if you only write inside {} without giving the object its name
//it will treat it as json --> const obj1 = {} is Object but only {} is json
