// array

// Creating an Array
const numArr = [0,1,2,3,4,5,15,5,85]
const strArr = ["Sachin", "Chirantan", "Yadav"]
const myArr = new Array(1,2,3,56,98)
// console.log(numArr);     // [0, 1,  2,  3, 4, 5, 15, 85]
// console.log(strArr);     // [ 'Sachin', 'Chirantan', 'Yadav' ]
// console.log(myArr);      // [ 1, 2, 3, 56, 98 ]

// Accessing Elements
// console.log(numArr[2]);  // 2
// console.log(strArr[3]);  // undefined
// console.log(myArr[4]);   // 98

// Modifying Elements
// myArr[4] = 5
// console.log(myArr);         // [ 1, 2, 3, 56, 5 ]

// strArr[2] = "Patnayak"
// console.log(strArr);        // [ 'Sachin', 'Chirantan', 'Patnayak' ]

// strArr[4] = "Patnayak"
// console.log(strArr);        // [ 'Sachin', 'Chirantan', 'Patnayak', <1 empty item>, 'Patnayak' ]

// Array Length
// console.log(myArr.length);   // 5


// array methods

// Adding Elements
// .push(value) - adds at the end, 
// strArr.push("Amit")
// console.log(strArr);       // [ 'Sachin', 'Chirantan', 'Yadav', 'Amit' ]

// .unshift(value) - adds at the beginning.
// strArr.unshift("Harsh")
// console.log(strArr);       // [ 'Harsh', 'Sachin', 'Chirantan', 'Yadav', 'Amit' ]

// Removing Elements
// .pop() - removes the last element.
// strArr.pop()
// console.log(strArr);        // [ 'Harsh', 'Sachin', 'Chirantan', 'Yadav' ]

// .shift() - removes the first.
// strArr.shift()
// console.log(strArr);         // [ 'Sachin', 'Chirantan', 'Yadav' ]

// Slicing
// .slice(start, end) - extracts a part of an array without modifying the original.
// console.log(myArr);               // [ 1, 2, 3, 56, 98 ]
// console.log(myArr.slice(1, 4));   // [ 2, 3, 56 ]
// console.log(myArr);               // [ 1, 2, 3, 56, 98 ]
// console.log(myArr.slice());       // [ 1, 2, 3, 56, 98 ]
// console.log(myArr.slice(1));      // [ 2, 3, 56, 98 ]

// Splicing
// .splice(start, deleteCount, newItem1, newItem2, ...) - extracts a part of an array and modifies the original array.
// console.log(myArr);               // [ 1, 2, 3, 56, 98 ]
// console.log(myArr.splice(1, 4));  // [ 2, 3, 56, 98 ]
// console.log(myArr);               // [ 1 ]         

// console.log(strArr);              // [ 'Sachin', 'Chirantan', 'Yadav' ]
// strArr.splice(1, 1, "Orange");
// console.log(strArr);              // [ 'Sachin', 'Orange', 'Yadav' ]
// strArr.splice(1, 2, "apple");
// console.log(strArr);              // [ 'Sachin', 'apple' ]

// strArr.splice(1, 1, "orange","apple","pineapple","banana","grapes");
// console.log(strArr);              // [ 'Sachin', 'orange', 'apple', 'pineapple', 'banana', 'grapes' ]
// strArr.splice(3, 2, "abc")  
// console.log(strArr);              // [ 'Sachin', 'orange', 'apple', 'abc', 'grapes' ]

// Searching
// .indexOf(value)  - Find Index
// console.log(strArr.indexOf("Yadav"));   // 2
// console.log(numArr.indexOf(5));         // 5

// .lastIndexOf(value, fromIndex); - Find Last Occurrence
// console.log(numArr.lastIndexOf(5));         // 7
// console.log(numArr.lastIndexOf(5, 1));      // -1   if out of range gives -1
// console.log(numArr.lastIndexOf(5, 8));      // 7    it counts from end, including that index


// .includes(value) - Check if Exists
// console.log(strArr.includes("Yadav"));  // true

// .find(callback)  - Find First Matching Value
// console.log(numArr.find(x => x > 10));  // 15

// .findIndex(callback); - Find Index of First Match
// console.log(numArr.findIndex(x => x > 10));  // 6

// Sorting
// .sort()   -- sorts an array
// let numbers = [3, 1, 2];
// numbers.sort();
// console.log(numbers); // [1, 2, 3]

// Sorting Strings Alphabetically -- By default, .sort() sorts strings alphabetically.
// let fruits = ["Banana", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits); // ["Apple", "Banana", "Mango"]


// Reversing
// .reverse()  -- reverses the array order.
// numbers.reverse();
// console.log(numbers); // [3, 2, 1]


// Joining Elements  
// .join(separator)  -- creates a string from array elements.
// let num = [1, 2, 3, 4, 5]
// console.log(num.join('-'));  // 1-2-3-4-5

// let str = ["a", "b", "c"].join("-");
// console.log(str); // "a-b-c"


// Concatenation
// .concat()   -- merges two or more arrays.
// let combined = [1, 2]
// console.log(combined.concat([3, 4])); // [1, 2, 3, 4]

// let str1 = [2, 4, 6]
// let str2 = [4, 6, 7]
// console.log(str1.concat(str2));   // [ 2, 4, 6, 4, 6, 7 ]


// .toString() - Convert Array to String
// let arr = [1,2,3,4]
// console.log(arr.toString());   // 1,2,3,4


// Spread Operator (...)   
// [...arr]   -- creates a shallow copy of an array.
// let original = [1, 2, 3];
// let copy = [...original, 4, 5];
// console.log(copy); // [1, 2, 3, 4, 5]


// let str = [1,4,5,6]
// let str1 = [5,8,9]
// let str2 = ["Sachin", "Chir"]
// console.log([...str, ...str1, ...str2]);   // [ 1, 4, 5, 6, 5, 8, 9, 'Sachin', 'Chir' ] 

// console.log(...str, ...str1, ...str2);     // 1 4 5 6 5 8 9 Sachin Chir
// console.log(str, str1, str2);              // [ 1, 4, 5, 6 ] [ 5, 8, 9 ] [ 'Sachin', 'Chir' ]


// . flat()
// let first_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]]
// let real_array = first_array.flat(Infinity)
// console.log(real_array);     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5]



// Array.isArray()
// Check if a Value is an Array, Returns: true if the value is an array, otherwise false.
// Array.isArray(value);

// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.isArray("Hello"));   // false
// console.log(Array.isArray({ a: 1 }));  // false
// console.log(Array.isArray(new Array())); // true


// Array.from()  -- Creates a new array from an iterable or array-like object.
// Array.from(iterable, mapFunction, thisArg);

// console.log(Array.from("123")); // ['1', '2', '3']

// let strArray = Array.from("Hello");
// console.log(strArray); // ['H', 'e', 'l', 'l', 'o']
// console.log(Array.from({name: 'Sachin'}));   // []   -- will return empty array because it doesn't understand  
// what to convert in an array in object, if you want to thn we have to tell that either for keys or pair we want array

// Using Array.from() with mapFunction
// let numbers = Array.from([1, 2, 3], x => x * 2);
// console.log(numbers); // [2, 4, 6]


// Array.of()  -- Create an Array from Arguments
// Array.of(element1, element2, ...);
// let score1 = 500;
// let score2 = 100;
// let score3 = 700;
// console.log(Array.of(score1, score2, score3));   // [ 500, 100, 700 ]

// let arr1 = Array.of(5);
// console.log(arr1); // [5]

// let arr2 = Array.of(1, 2, 3);
// console.log(arr2); // [1, 2, 3]




// map() - Transform Elements in an Array
// Creates a new array by applying a function to each element of the original array.
// array.map(callback);

// Doubling Numbers
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]

// Extracting Property Values from Objects
// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//   ];
  
//   let names = users.map(user => user.name);
//   console.log(names); // ["Alice", "Bob"]
//   console.log(users.map(user => user.age));  // [ 25, 30 ]

// Converting Temperatures (Celsius to Fahrenheit)
// let celsius = [0, 10, 20, 30];
// let fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
// console.log(fahrenheit); // [32, 50, 68, 86]


// filter() - Extract Elements That Meet a Condition
// Creates a new array containing only the elements that satisfy a given condition.
// array.filter(callback);

// Filtering Even Numbers
// let numbers = [1, 2, 3, 4, 5, 6];
// let evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4, 6]

// Filtering Adults (Age >= 18)
// let people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 19 },
//   ];
// let adults = people.filter(person => person.age >= 18);
// console.log(adults);  // [{ name: "Alice", age: 25 }, { name: "Charlie", age: 19 }]


// Filtering Words Longer Than 4 Characters
// let words = ["apple", "cat", "banana", "dog"];
// let longWords = words.filter(word => word.length > 4);
// console.log(longWords); // ["apple", "banana"]


  



  
  












     







  

