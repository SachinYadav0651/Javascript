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



     







  

