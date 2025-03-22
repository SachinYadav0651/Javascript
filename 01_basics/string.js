const name = "Sachin"
const age = 26;

// console.log("my name is " + name + " and age is " + age);   // concating using +, don't use old method

// console.log(`my name is ${name} and age is ${age}`);        // concating using ``, use this always


const name1 = new String("Chirantan");

// console.log(name);
// console.log(name1);

// console.log(name1[0]);
// console.log(name1.__proto__);    
// console.log(name1.length);

// String Methods

const str1 = "A quick brown fox jumps over a lazy dog!";
const str2 = "An apple is not an orange, but orange is an apple";
const name2 = new String("Yadav");

//  at()  -- str.at(index)
// console.log(str1.at(4));        // i         --satarts from 0
// console.log(str1.at(-5));       //           --in negative value, last char starts at -1 not 0
// console.log(str1.at(100));      // undefined --out of range value, will show undefined
// console.log(str1.at());         // A         -- by default it takes 0, if no value is passed

//  charAt()  -- str.charAt(index)
// console.log(str1.charAt(4));        // i          --satarts from 0
// console.log(str1.charAt(-2));       // empty      -- no negative indices are allowed
// console.log(str1.charAt(100));      // empty      --out of range value, will show undefined
// console.log(str1.charAt());         // A          -- by default it takes 0, if no value is passed

// endsWith()  -- str.endsWith(searchString, [length])
// console.log(str1.endsWith("dog"));       // false
// console.log(str1.endsWith("dog!"));      // true
// console.log(str1.endsWith("dog!", 20));  // false
// console.log(str1.endsWith("dog!", 54));  // true

// inclues()   -- str.includes(searchString, [start])
// console.log(str1.includes("fox"));          // true
// console.log(str1.includes("fox", 5));       // true
// console.log(str1.includes("fox", 20));      // false

// indexOf     -- str.indexOf(searchValue, [fromIndex])           // search direction left to right
// console.log(str1.indexOf("fox"));                              // 14
// console.log(str1.indexOf("fox", 5));                           // 14
// console.log(str1.indexOf("fox", 20));                          // -1  -- if not found returns -1
// console.log(str2.indexOf("apple"));                            // 3

// const apple = str2.indexOf("apple");

// console.log(`${apple}, ${str2.indexOf("apple", apple + 1)}`);   // 3, 44
// console.log(str2.indexOf("orange", 20));                        // 31

// lastIndexOf()    -- str.lastIndexOf(searchValue, [fromIndex])   // search direction right to left but will count from starting only

// console.log(str2.lastIndexOf("apple"));                 // 44
// console.log(str2.lastIndexOf("apple", 8));              // 3
// console.log(str2.lastIndexOf("orange", 20));            // 19
// console.log(str1.lastIndexOf("orange", 100));           // -1      -- if not found returns -1
// console.log(str2.lastIndexOf("apple", -23));            // -1      -- it doesn't take negative indices will returns -1













