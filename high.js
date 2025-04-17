// for...of 

// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. 
// It's simple and clean when you just want to loop through values.

// Syntax:    for (const variable of iterable) {code block to execute}   -- for (const i of array){}
// 🧪 Example 1: Looping through an Array
// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }
// Output:
// apple
// banana
// cherry

// const numbers = [1, 2, 3, 4]
// for(const num of numbers){
//     if(num===2) continue;
//     console.log(num);     
//     // 1  
//     // 3  
//     // 4
// }

// 🧪 Example 2: Looping through a String
// const word = "Hi";
// for (const letter of word) {
//   console.log(letter);
// }
// Output:
// H
// i


// Maps -- only used for unique key-value pairs, no entries are added for duplicate values
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")     // entry with duplicate key-value pair, won't be included in map

// console.log(map);       
// Output: Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

// for (const key of map) {
//     console.log(key); 
//}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

// for (const [key, value] of map) {       // use [] for maps
//     console.log(key, ":-", value); 
// }
// IN :- India
// USA :- United States of America
// Fr :- France



// ✅ When to use:
// When you want values directly (not indexes or keys).
// Works great with arrays, strings, maps, sets.


// 🔁 for...of Loop – Key Points
// ✅ 1. Iterates Over Values -- It gives you the values directly from an iterable (not the keys or indexes).

// ✅ 2. Works With Iterables Only
// Works on:
// Arrays
// Strings
// Sets
// Maps
// Typed Arrays
// NodeLists

// ❌ Does not work directly on plain objects ({}).

// ✅ 3. Cleaner Syntax
// No need to use .length, indexes, or worry about out-of-bound errors.
// const str = "Hello";
// for (const char of str) {
//   console.log(char); // H, e, l, l, o
// }


// ✅ 4. Great for Map and Set
// const roles = new Map([
//   ['admin', 'full access'],
//   ['editor', 'edit content'],
// ]);

// for (const [role, permission] of roles) {
//   console.log(`${role}: ${permission}`);
// }

// ✅ 5. Use with Object.keys/values/entries() for Objects
// const person = { name: 'John', age: 25 };

// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }

// ✅ 6. Supports break, continue, and return
// for (const num of [1, 2, 3, 4]) {
//   if (num === 3) break;
//   console.log(num); // 1, 2
// }


// ✅ 7. Safe with const (No Variable Leakage)
// for ( item of ['a', 'b']) {
//   console.log(item); // Works fine
// }
// console.log(item);
// item is not accessible here — block-scoped


//🛑 What for...of is not for:
// It’s not meant for objects unless you use Object.entries().
// Doesn’t give you index/keys (use for...in or classic for for that).




// 🔁 for...in Loop

// 🔧 Syntax:  --    for (const key in object) {// code using object[key]

// 📌 Important Points about for...in

// Feature	                                Details
// 🔑 Iterates over	                        Keys (property names) of an object
// 🎯 Works on	                            Objects ✅, Arrays ⚠️ (not recommended)
// 🔄 Use with	                            object[key] to get value
// ❌ Doesn’t work on	                   Values directly (use for...of for that)
// ✅ Can be used with	                   break, continue, return
// ⚠️ May include inherited props	        Use hasOwnProperty() to filter if needed


// ✅ Example 1: Looping through an Object

// const user = {
//     name: "Alice",
//     age: 30,
//     city: "Paris"
//   }; 
//   for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
//   }
  // Output:
  // name: Alice
  // age: 30
  // city: Paris
//   }


// ⚠️ Example 2: With Arrays --- (Not Recommended) use for of only
// const colors = ['red', 'green', 'blue'];

// for (const index in colors) {
//   console.log(index, colors[index]); // Index is a string!
// }
// Output:
// 0 red
// 1 green
// 2 blue

// ⚠️ for...in with arrays can give unexpected results — better to use for, for...of, or forEach for arrays.




// 🧠 Summary

// Loop	            Iterates Over	        Use For
// for...in	        Object keys	            Objects
// for...of	        Iterable values	        Arrays, Strings, Sets
// for	            Index-based	            Arrays, custom control



// foreach 
// forEach() is an Array method in JavaScript used to execute a function for each element in an array, in order.

// It does not return a new array.
// It’s used when you want to loop through an array and perform side effects (like logging or modifying something outside the loop).

// 🔧 Syntax  -- array.foreach(function(element){ // your code here  })
// array.forEach(function(element, index, array) {// your code here });

// Name	                  Description
// element	              The current item in the array
// index	(Optional)      Index of the current item
// array	(Optional)      The full array being looped

// ✅ We can also use arrow functions:
// array.forEach(() => {// your code here});
// array.forEach((element, index) => {// your code here});

// 📌 Key Points of forEach()

// 🔁 Executes once for each element in the array	
// 🛠️ Doesn’t modify the array unless you do it manually	
// ❌ You can’t break or return from forEach() early (use for or for...of if you need that)	
// ⚠️ Only works on arrays (not objects or sets)	
// ⏱ It runs synchronously	
// 🧼 Clean and readable for small tasks


// ✅ Examples of forEach()
// 1. Simple Loop
// const fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach(function(fruit){
//   console.log(fruit); 
// })
// Output: apple  banana  cherry

// We can also use separate function in foreach 
// function printMe(fruit){
//   console.log(fruit);
// }
// fruits.forEach(printMe)           // give only refernce, don't execute      
// Output: apple  banana  cherry

// fruits.forEach((fruit)=>{
//   console.log(fruit) 
// })
// Output: apple, banana, cherry

// 2. With Index
// fruits.forEach(function(fruit, index){
//   console.log(`${index}: ${fruit}`)
// })
// Output:
// 0: apple
// 1: banana
// 2: cherry

// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`)
// })
// Output:
// 0: apple
// 1: banana
// 2: cherry


// 3. Modifying External Variable
// let total = 0;
// const prices = [10, 20, 30];

// prices.forEach(price => {
//   total += price
// });
// console.log("Total:", total); // Total: 60


// 4. ❌ Cannot break out early
// const arr = [1, 2, 3, 4];

// arr.forEach(num => {
//   if (num === 3) return // Only exits this iteration, not the loop
//   console.log(num)
// });
// Output: 1 2 4
// If you want to exit early, use for, for...of



// forEach when --- objects inside array
// const myCoding = [
//   {
//     languagename: "javascript",
//     languageFileName: "JS"
//   },
//   {
//     languagename: "Python",
//     languageFileName: "PY"
//   },
//   {
//     languagename: "CSharp",
//     languageFileName: "C#"
//   }
// ]

// myCoding.forEach((item) =>{
//   console.log(item.languagename); 
// })
// javascript
// Python
// CSharp

// myCoding.forEach((item) =>{
//   console.log(`${item.languagename}: ${item.languageFileName}`); 
// })
// javascript: JS
// Python: PY
// CSharp: C#




// 🏁 Final Tip

// Goal	                                  Use This Loop
// Looping through object properties	    for...in
// Looping through array values	          for...of or forEach()
// Need index or full control	            for loop
// Need clean readable array processing	  forEach()
// Want to break early from loop	        for, for...of, or for...in












  








