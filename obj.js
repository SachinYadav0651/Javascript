// Objects -- An object in JavaScript is a collection of properties, where each property is a key-value pair.

// singeleton
// obj.create

// object literals
// Creating an object

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const jsUser = {
    name: "Sachin",
    age: 25,
    "full name" : "Sachin Yadav",
    mySym: "myKey1",        // don't use this, wrong syntax for symbols
    [mySym2]: "myKey2",     // correct syntax for symbols, use this
    location: "Nagpur",
    email: "sy@google.com",
    isloggedin: true,
    lastloggedInDays: ["Monday", "Saturday"]
}
  
// Accessing Object Properties
// Dot notation: 
// console.log(jsUser.email);    // sy@google.com
// console.log(jsUser.full name);      // can't access with dot

// Bracket notation:
// console.log(jsUser[email]);     // wrong notation email should be inside double quotes
// console.log(jsUser["email"]);  // sy@google.com
// console.log(jsUser["age"]);    // 25
// console.log(jsUser["full name"]);   // Sachin Yadav
// console.log(jsUser.mySym);       // myKey1
// console.log(typeof jsUser.mySym);  // string
// console.log(jsUser[mySym2]);      // myKey2 -- correct syntax for symbols
// console.log(jsUser); 
// Output: {
//   name: 'Sachin',
//   age: 25,
//   'full name': 'Sachin Yadav',
//   mySym: 'myKey1',
//   location: 'Nagpur',
//   email: 'sy@google.com',
//   isloggedin: true,
//   lastloggedInDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key2)]: 'myKey2'    // if symbol is used as key, thn it will be the output
// }


// Modifying Object Properties
// jsUser.email = "chirantan@google.com"
// console.log(jsUser);

// Object.freeze(objName)  -- used to make an object immutable, meaning that its properties cannot be added, removed, or modified.
// Prevents property modifications – Existing properties cannot be changed.
// Prevents adding new properties – You cannot add new properties.
// Prevents deleting properties – Existing properties cannot be removed.
// Does not allow reconfiguration – You cannot change property attributes (e.g., making a property writable).

// Object.freeze(jsUser)
// jsUser.email = "yadav@google.com"
// console.log(jsUser);

// Freezing Nested Objects  -- Object.freeze() is shallow, meaning it only freezes the top-level properties. Nested objects remain mutable.
// const person = {
//     name: "Bob",
//     address: {
//       city: "Los Angeles",
//       zip: 90001
//     }
//   };
//   Object.freeze(person);
//   person.address.city = "New York"; // ✅ Allowed (nested object is still mutable)
//   console.log(person.address.city); // Output: "New York"
  

// Adding New Properties
// jsUser.city = "Ngp"
// console.log(Object.isFrozen(jsUser));  // true    -- used to check if object is frozen or not
// console.log(jsUser);


// Deleting a Property
// delete jsUser.city
// console.log(jsUser);

//  functions in objects
// jsUser.greeting = function(){
//     console.log("Hello JsUser");   
// }

// jsUser.greeting 
// jsUser.greeting();      

// console.log(jsUser);
// Output: {
//   name: 'Sachin',
//   age: 25,
//   'full name': 'Sachin Yadav',
//   mySym: 'myKey1',
//   location: 'Nagpur',
//   email: 'sy@google.com',
//   isloggedin: true,
//   lastloggedInDays: [ 'Monday', 'Saturday' ],
//   greeting: [Function (anonymous)],
//   [Symbol(key2)]: 'myKey2'
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello JsUser: ${jsUser.name}`);    
// }
// jsUser.greetingTwo();   // Hello JsUser: Sachin


// const jioUser = new Object()    // singeleton object , construtor object     -- {}
// const jioUser = {}   // {} - object literals

// jioUser.id = 23
// jioUser.name = "Sachin"
// jioUser.isloggedin = true

// console.log(jioUser);      // { id: 23, name: 'Sachin', isloggedin: true }


// Nested Objects

// const newUser = {
//     email: "sy@google.com",
//     fullname: {
//         userfullname: {
//             firstname: "Sachin",
//             lastname: "Yadav"
//         }
//     }
// }

// console.log(newUser.email);     // sy@google.com
// console.log(newUser.fullname);  // { userfullname: { firstname: 'Sachin', lastname: 'Yadav' } }
// console.log(newUser.fullname.userfullname);  // { firstname: 'Sachin', lastname: 'Yadav' }
// console.log(newUser.fullname.userfullname.firstname);  // Sachin

// Checking for Nested Properties (Optional Chaining ?.)  -- To avoid errors when accessing deep properties:
// console.log(newUser.fullname.userfullname?.noname); // // Output: undefined (no error)














 











