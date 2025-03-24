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
// console.log(str2.replace(/orange/g, "apple"));      // replace() only first match
// console.log(str2.replace(/orange/g, "apple"));     // replaces all matches as g is used

// replaceALL()   -- string.replace(searchValue, newValue)   -- searchValue = The substring or regular expression to search for.

// console.log(str2.replaceAll("apple", "orange"));
// console.log(str2.replaceAll(/\borange\b/, "apple"));   // doesn't work without g
// console.log(str2.replaceAll(/\borange\b/g, "apple"));

// search()       -- string.search(regexp)
// the search() method is used to search for a match between a regular expression and a string. 
// It returns the index of the first match or -1 if no match is found.
// By default, it is case-sensitive unless you use a regular expression flag like /i for case-insensitivity.
// It does not search for all matches, only the first one is returned.

// console.log(str2.search("apple"));      // 3
// console.log(str2.search("Sachin"));     // -1
// console.log(str2.search(/apple/i));     // 3
// console.log(str2.search(/apple/g));     // 3

// slice()       -- string.slice(beginIndex, endIndex), array.slice(beginIndex, endIndex)
// To extract a portion of a string or an array without modifying the original string or array. 
// It can be used to create a shallow copy of a part of the array or string.


// console.log(str2.slice(4, 12));      // pple is    -- Extracts from index 4 to index 12 (not including 12)

// let arr = [1, 2, 3, 4, 5];
// let result = arr.slice(1, 4);  // Extracts from index 1 to index 4 (not including 4)
// console.log(result);  // Output: [2, 3, 4]
// Both beginIndex and endIndex can be negative, in which case they are counted from the end of the string or array.
// console.log(str2.slice(-4));         // pple
// console.log(str2.slice(-4, -12));    // not a valid scenario so returns empty string
// console.log(str2.slice(-12, -4));    // is an a

// split()      -- string.split(separator, limit)
// used to split a string into an array of substrings based on a specified separator.

// let str3 = "apple,banana,orange,grape,pineapple,coco";
// let result = str3.split(",");
// console.log(result);               // Output: [ 'apple', 'banana', 'orange', 'grape', 'pineapple', 'coco' ]

//If limit is provided, the array will contain at most limit elements, even if there are more separators in the string.
// console.log(str3.split(",", 2));   // [ 'apple', 'banana' ]
// console.log(str3.split(",", 4));   // [ 'apple', 'banana', 'orange', 'grape' ]

// If the separator is not provided, the whole string is returned as a single array element.
// console.log(str3.split());        // [ 'apple,banana,orange,grape,pineapple,coco' ]
// console.log(str3.split(4));       // [ 'apple,banana,orange,grape,pineapple,coco' ]

// If the separator is an empty string (""), the string is split into individual characters.
// console.log(str3.split(""));      
//   Output: ['a', 'p', 'p', 'l', 'e', ',', 'b','a', 'n', 'a', 'n', 'a', ',', 'o','r', 'a', 'n', 'g', 'e', ',', 'g',
//     'r', 'a', 'p', 'e', ',', 'p', 'i','n', 'e', 'a', 'p', 'p', 'l', 'e',',', 'c', 'o', 'c', 'o'] 

// Example with Regular Expression:
// let str = "apple123banana456orange";
// let result = str.split(/\d+/);  // Split at any sequence of digits
// console.log(result);  // Output: ["apple", "banana", "orange"]


// startsWith()     -- string.startsWith(searchString, position)
// used to check if a string starts with a specific sequence of characters. 
// It returns true if the string begins with the specified characters, and false otherwise.

// If position is not provided, the search will begin at the start of the string (index 0).
// console.log(str2.startsWith("An"));            // true
// console.log(str2.startsWith("apple", 10));     // false    -- // Starts searching from index 10
// console.log(str2.startsWith("apple", 3));      // true
// If the position is negative, it is treated as 0
// console.log(str2.startsWith("apple", -6));     // false  
// console.log(str2.startsWith("An", -100)); 
// console.log(str2.startsWith("", 2));           // true


// subString()     -- string.substring(startIndex, endIndex)
// used to extract a portion of a string between two specified indices and returns a new string without modifying the original string.
// It does not modify the original string. A new string is returned.

// console.log(str2.substring(3));             // apple is not an orange, but orange is an apple
// console.log(str2.substring(1, 5));          // n ap   -- starts from index 1 to index 5 (not including 5)
// If startIndex is greater than endIndex, the values are swapped, so substring(5, 0) is the same as substring(0, 5).
// console.log(str2.substring(5, 1));          // n ap
// console.log(str2.substring());              // An apple is not an orange, but orange is an apple
// console.log(str2.substring(""));            // An apple is not an orange, but orange is an apple
// Negative indices are not allowed. If startIndex or endIndex is negative, it is treated as 0.
// console.log(str2.substring(-5));            // An apple is not an orange, but orange is an apple
// console.log(str2.substring(-5, -12));       // empty string 
// console.log(str2.substring(-12, -5));       // empty string


// toLowerCase()       -- string.toLowerCase()
// They only affect alphabetic characters. Non-alphabetic characters (such as numbers and punctuation) remain unchanged.
// console.log(name.toLowerCase);       // doesn't work
// console.log(name.toLowerCase());     // sachin

// toUpperCase()       -- string.toUpperCase()
// They only affect alphabetic characters. Non-alphabetic characters (such as numbers and punctuation) remain unchanged.
// console.log(name1.toUpperCase);      // doesn't work
// console.log(name1.toUpperCase());    // CHIRANTAN


// toString()         -- object.toString()
// object: The object, array, or other data type on which toString() is called.

// Example with a Number:
// let num = 123;
// console.log(typeof(num));        // number

// let result = num.toString();
// console.log(result);             // Output: "123"
// console.log(typeof(result));     // string

// Example with an Array:
// let arr = [1, 2, 3];             
// console.log(typeof(arr));        // obj
// let result1 = arr.toString();
// console.log(result1);            // Output: "1,2,3"
// console.log(typeof(result1));    // string

// Example with an Object:
// let obj = {name: "John", age: 30};   
// console.log(typeof(obj));          // obj
// let result3 = obj.age.toString();
// console.log(result3);              // Output: "[object Object]"
// console.log(typeof(result3));      // string


// trim()     -- string.trim()
// Removes whitespace from both the beginning and the end of the string.
// let str4 = "   Sachin is a good boy   ";
// console.log(str4.trim());                 // Sachin is a good boy


// trimEnd()     -- string.trimEnd()
// Removes whitespace from the end (right side) of the string.
// console.log(str4.trimEnd());               // "    Sachin is a good boy"


// trimStart()     -- string.trimStart()
// Removes whitespace from the beginning (left side) of the string.
// console.log(str4.trimStart());              // "Sachin is a good boy     "


 







































































