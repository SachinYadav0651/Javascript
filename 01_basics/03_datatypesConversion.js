/*
let score = "Sachin"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);         // NaN = Not a number

score = "99"
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);         // 99

score = "99abcd"
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);         // NaN

score = null
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);         // 0

score = undefined
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);         // NaN

score = true
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);         // 1

score = false
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);         //0



let isloggedIn = 1

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);           // true

isloggedIn = ""

booleanIsLoggedIn = Boolean(isloggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);           // false

isloggedIn = "Sachin"

booleanIsLoggedIn = Boolean(isloggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);           // true

isloggedIn = null

booleanIsLoggedIn = Boolean(isloggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);           // false 

isloggedIn = undefined

booleanIsLoggedIn = Boolean(isloggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);           // false

isloggedIn = 0

booleanIsLoggedIn = Boolean(isloggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);           // false

isloggedIn = 230

booleanIsLoggedIn = Boolean(isloggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);           // true



let someNbr = 123

let stringSomeNbr = String(someNbr)
console.log(typeof stringSomeNbr);
console.log(stringSomeNbr);       // 123

someNbr = true

stringSomeNbr = String(someNbr)
console.log(typeof stringSomeNbr);
console.log(stringSomeNbr);       // true

someNbr = false

stringSomeNbr = String(someNbr)
console.log(typeof stringSomeNbr);
console.log(stringSomeNbr);      // false

someNbr = null

stringSomeNbr = String(someNbr)
console.log(typeof stringSomeNbr);
console.log(stringSomeNbr);     // null

someNbr = undefined

stringSomeNbr = String(someNbr)
console.log(typeof stringSomeNbr);
console.log(stringSomeNbr);      // undefined

*/

let value = 2
let negValue = -value // -2
console.log(negValue);

// console.log(2+2);  // 4
// console.log(2-2);  // 0
// console.log(2*2);  // 4
// console.log(2**3); // 8
// console.log(2/3);  // 0.67
// console.log(2%3);  // 2

let str1 = "Sachin"
let str2 = " Yadav"
let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log((1 + 2) * 5 % 3);
console.log(+true);
// console.log(true+); // wrong expression
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 3

let gameCounter = 10
gameCounter++;              // 11
console.log(gameCounter++); // 11 first will print the value thn increment to 12
console.log(gameCounter);   // 12


++gameCounter;               // 13
console.log(gameCounter);    // 13
console.log(gameCounter++);  // print 13 thn increment to 14
console.log(++gameCounter);  // 15


























