// Objects -- An object in JavaScript is a collection of properties, where each property is a key-value pair.

// singeleton
// obj.create

// object literals
// Creating an object

// const mySym = Symbol("key1")
// const mySym2 = Symbol("key2")

// const jsUser = {
//     name: "Sachin",
//     age: 25,
//     "full name" : "Sachin Yadav",
//     mySym: "myKey1",        // don't use this, wrong syntax for symbols
//     [mySym2]: "myKey2",     // correct syntax for symbols, use this
//     location: "Nagpur",
//     email: "sy@google.com",
//     isloggedin: true,
//     lastloggedInDays: ["Monday", "Saturday"]
// }
  
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


// Object methods

// Object.assign({}, objects) -- 
// Merging Objects

// Adding Properties to an Object
// const user = { name: "Alice" };
// Object.assign(user, { age: 25, city: "New York" });
// console.log(user); // { name: "Alice", age: 25, city: "New York" }
//  The user object is directly modified.


// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const result = Object.assign({}, obj1, obj2);   // {} - it will create new object and merge all objects in this new one
// console.log(result); // { a: 1, b: 3, c: 4 }

//  Cloning an Object
// const original = { x: 10, y: 20 };
// const clone = Object.assign({}, original);
// console.log(clone); // { x: 10, y: 20 }
// console.log(clone === original); // false (different references)
// This creates a shallow copy, meaning nested objects are still referenced.

// Handling Nested Objects (Shallow Copy Issue)
// const objA = { details: { age: 30 } };
// const cloneA = Object.assign({}, objA);
// cloneA.details.age = 40;
// console.log(objA.details.age); // 40 (changes original object too!)
// Since it's a shallow copy, nested objects are still referenced.

// Solution: Use structuredClone() or JSON.parse(JSON.stringify(obj)) for deep cloning.
// const deepClone = structuredClone(objA);
// deepClone.details.age = 50;
// console.log(objA.details.age); // 40 (original remains unchanged)



// Spread operator {...obj}
// The spread operator is commonly used to:
// Clone objects
// Merge objects
// Add or override properties
// It provides a cleaner and more readable alternative to Object.assign() for cloning and merging objects.

// Cloning an Object
// const obj = {name: "Sachin", age: 26}
// const clone = {...obj}
// console.log(clone);           // { name: 'Sachin', age: 26 }
// console.log(obj === clone);  // false (different references)
// The object is cloned, but it's a shallow copy, meaning nested objects remain referenced.

// Merging Objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged); // { a: 1, b: 3, c: 4 }

// Adding/Overriding Properties
// const user = { name: "Bob", age: 30 };
// const updatedUser = { ...user, age: 35, city: "New York" };
// console.log(updatedUser); // { name: "Bob", age: 35, city: "New York" }
// The age property is updated, and city is added in updatedUser
// console.log(user);  // { name: 'Bob', age: 30 }

// Nested Objects (Shallow Copy Issue)
// const objA = { details: { age: 40 } };
// const cloneA = { ...objA };
// cloneA.details.age = 50;
// console.log(objA.details.age); // 50 (changes original too!)

// Solution: Use structuredClone() for deep cloning
// const deepClone = structuredClone(objA);
// deepClone.details.age = 60;
// console.log(objA.details.age); // 50 (original remains unchanged)
// console.log(deepClone);  // { details: { age: 60 } }

// Use shallow copy (... , assign) when you only need a top-level copy and don’t modify nested objects.
// Use deep copy (StructuredClone) when you need a fully independent copy of the object.


// Object.keys()  -- Object.keys(object)
// Returns an array of all keys (property names) of an object.
// const user = { name: "Alice", age: 25, city: "New York" };
// const keys = Object.keys(user);
// console.log(keys); // ["name", "age", "city"]

// Object.values() -- Object.values(object)
// const values = Object.values(user);
// console.log(values); // ["Alice", 25, "New York"]

// Object.entries() -- Object.entries(object)
// const entries = Object.entries(user);
// console.log(entries); // [ [ 'name', 'Alice' ], [ 'age', 25 ], [ 'city', 'New York' ] ]

// When to Use What?
// ✅ Use Object.keys() - when you need property names.
// ✅ Use Object.values() - when you need property values.
// ✅ Use Object.entries() - when you need both keys and values.

// hasOwnProperty()  -- object.hasOwnProperty(property)
// checks whether an object has a specific own property
// const person = { name: "Alice", age: 25 };
// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("city")); // false


// const users = [
//     {
//         id: 1,
//         name: "Sachin",
//         age: 26
//     },
//     {
//         id: 2,
//         name: "Chirantan",
//         age: 28
//     },
//     {
//         id: 3,
//         name: "Yadav",
//         age: 27
//     }
// In array it takes index as key and elements as value
// console.log(users[1].name);      // Chirantan
// console.log(Object.keys(users));  // [ '0', '1', '2' ] -- returns index values
// console.log(Object.keys(users[0])); // [ 'id', 'name', 'age' ] -- returns key values inside 0 index of an array
// console.log(users);       
// Output: [
//     { id: 1, name: 'Sachin', age: 26 },
//     { id: 2, name: 'Chirantan', age: 28 },
//     { id: 3, name: 'Yadav', age: 27 }
//   ]
// console.log(Object.values(users));  
// Output: [
//     { id: 1, name: 'Sachin', age: 26 },
//     { id: 2, name: 'Chirantan', age: 28 },
//     { id: 3, name: 'Yadav', age: 27 }
//   ]
// console.log(Object.values(users[2]));    // [ 3, 'Yadav', 27 ]
// console.log(Object.entries(users));
// Output: [
//   [ '0', { id: 1, name: 'Sachin', age: 26 } ],
//   [ '1', { id: 2, name: 'Chirantan', age: 28 } ],
//   [ '2', { id: 3, name: 'Yadav', age: 27 } ]
// ]
// console.log(Object.entries(users[1]));  // [ [ 'id', 2 ], [ 'name', 'Chirantan' ], [ 'age', 28 ] ]


// Object.seal() --  Object.seal(obj)
// Seals an object. You can’t add or remove properties, but existing properties can still be modified.

// const obj = { a: 1 };
// Object.seal(obj);
// obj.a = 100;
// obj.b = 200;  // can't add new property if sealed, won't work
// delete obj.a; // won't work as already sealed, only modify the existing prperties
// console.log(obj); // { a: 100 }    // modified


// Destructure of objects
// useful feature for extracting values from objects and assigning them to variables in a clean and readable way.

// Renaming Variables  -- You can rename variables when destructuring:
// const user = { 
//     fullName: "Sachin", 
//     userAge: 25 };
// const { fullName: name, userAge: age } = user;
// console.log(name); // "Sachin"
// console.log(age);  // 25

// Default Values -- If the property doesn't exist, you can assign a default:
// const user1 = { name: "Bob" };
// const { name, age = 30 } = user1;
// console.log(name); // "Bob"
// console.log(age);  // 30

// Nested Destructuring  -- You can extract values from nested objects:
// const person = {
//     name: "Eve",
//     address: {
//       city: "NYC",
//       zip: 10001
//     }
//   };
//   console.log(person.address.city); // NYC
//   const {address: test} = person; 
//   console.log(test);     // { city: 'NYC', zip: 10001 }
//   const {address: { city, zip }} = person;  // either user default name in nested objects or use : to give diff name like {city: test}
//   console.log(city); // "NYC"
//   console.log(zip);  // 10001
//   const {address: {city: test1, zip: test2}} = person; // like this 
//   console.log(test1); // NYC
//   console.log(test2); // 10001


// const newUser = {
//     email: "sy@google.com",
//     fullname: {
//         userfullname: {
//             firstname: "Sachin",
//             lastname: "Yadav"
//         }
//     }
// }

// const {fullname} = newUser;
// console.log(fullname); // { userfullname: { firstname: 'Sachin', lastname: 'Yadav' } }
// const {fullname: {userfullname: userfn}} = newUser;
// console.log(userfn);  // { firstname: 'Sachin', lastname: 'Yadav' }
// const {fullname: {userfullname: {firstname: fn, lastname: ln}}} = newUser;
// console.log(fn);    // Sachin
// console.log(ln);    // Yadav



  

  
  
  


































 











