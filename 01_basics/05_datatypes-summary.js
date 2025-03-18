// Based on the storing and retrieving of data, there are 2 types:
// Primtive and Non- Primitive

// Primitive datatypes (Call by Value)
// 7 types: String, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValur = 100.3;
const player = "Sachin";
const boolValue = true;
const outsideTemp = null;
let singValue;

const id = Symbol("123");         // Symbol is used to make a value unique
const accountId = Symbol("123"); 

console.log(id === accountId);    // false = not equal becuase both values are unique

const bigNum = 1234567890123456789n;     // to denote bigInt number use prefix "n" 



// Non-Primitive datatypes (Call by reference)
// 3 types: Array, Object and Function

const arrValue = ["Sachin", "Chirantan","Yadav"]
console.log(arrValue);

const myDetails = {
    name : "Sachin",
    age : 26,
    Id : 456
}
console.log(myDetails);



const myFunction = function(){
console.log("My new function")
}

myFunction();


