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

// match()         -- string.match(regexp)      // You can extract specific patterns like email, dates, words of certain length from a string
// doen't return an array so you can't iterate through results w/0 convering to an array
// regex = Regex (short for regular expression) is a powerful tool used for pattern matching within strings. 
// It allows you to define patterns that can be used to search, match, or manipulate text based on specific criteria.
// g = The global flag (g) in a regular expression (regex) tells the regex engine to search for all matches in the 
// input string, rather than stopping after the first match is found

// const regex = /[A-Z]/g;       // 
// const regex1 = /[a-z]/g;
// const regex2 = /[a-z]/;
// console.log(`All Capital Letters:- ${str1.match(regex)} \nAll Small letters:- ${str1.match(regex1)} \nFirst Small letter:- ${str1.match(regex2)}`);

// const regex3 = /[0-9]/g;
// console.log(str1.match(regex3));    // null  -- if no match is found will return null


// matchAll    -- string.matchAll(regexp)    The matchAll() method is used to match all occurrences of a pattern in a string and 
// returns an array(iterator) for all matches, including capturing groups. 
// it doesn't matter if you use global flag(g) as it alreay includes all matches

// const regex = /\bapple\b/g;   // to check a particular word in a sentence -- /\bword\b/
// const array = [...str2.matchAll(regex)];  // first store as a array [... ]
// console.log(array); 
// console.log(array.length);

// padEnd()   -- string.padEnd(targetLength, padString)

// console.log(name.padEnd(12, "*"));
// console.log(name1.padEnd(15, "-"));
// console.log(name1.padEnd(name1.length +1, "-"));
// console.log(name.padEnd(12));                      // if padString is not provided, it defaults to space(empty string)
// console.log(name.padEnd(2, "*"));                  // if targeted length provided is less than string thn it won't pad the string




// padStart()   -- string.padStart(targetLength, padString)

// console.log(name.padStart(12, "*"));
// console.log(name1.padStart(15, "-"));
// console.log(name1.padStart(name1.length +1, "-"));
// console.log(name.padStart(12));                      // if padString is not provided, it defaults to space(empty string)
// console.log(name.padStart(2, "*"));                  // if targeted length provided is less than string thn it won't pad the string


// repeat()     -- string.repeat(count)       
// repeat() does not modify the original string; it returns a new string with the repetitions.

// console.log(name.repeat(5));
// console.log(name.repeat(0));     // If the count is 0, it returns an empty string.
// console.log(name.repeat(-5));  // If the count is negative or not an integer, it throws a RangeError.
// console.log(name.repeat(2.7));   // If the count is not an integer (decimal), it throws a RangeError.
// console.log(name.repeat());


// replace()   -- string.replace(searchValue, newValue)   -- searchValue = The substring or regular expression to search for.

// console.log(str2.replace("apple", "orange"));
// console.log(str2.replace(/\borange\b/, "apple"));      // replace() only first match
// console.log(str2.replace(/\borange\b/g, "apple"));     // replaces all matches as g is used

// replaceALL()   -- string.replace(searchValue, newValue)   -- searchValue = The substring or regular expression to search for.

// console.log(str2.replaceAll("apple", "orange"));
// console.log(str2.replaceAll(/\borange\b/, "apple"));   // doesn't work without g
// console.log(str2.replaceAll(/\borange\b/g, "apple"));


































