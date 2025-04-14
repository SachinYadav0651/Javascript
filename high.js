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








