// Objects -- An object in JavaScript is a collection of properties, where each property is a key-value pair.

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
console.log(jsUser.email);    // sy@google.com
// console.log(jsUser.full name);      // can't access with dot

// Bracket notation:
// console.log(jsUser[email]);     // wrong notation email should be inside double quotes
console.log(jsUser["email"]);  // sy@google.com
console.log(jsUser["age"]);    // 25
console.log(jsUser["full name"]);   // Sachin Yadav
console.log(jsUser.mySym);       // myKey1
console.log(typeof jsUser.mySym);  // string
console.log(jsUser[mySym2]);      // myKey2 -- correct syntax for symbols








