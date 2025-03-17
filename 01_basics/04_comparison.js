console.log(2 > 3);     // false
console.log(2 >= 3);    // false
console.log(2 < 3);     // true
console.log(2 <=3 );    // true
console.log(2 == 3);    // false
console.log(2 !=3 );    // true

console.log("2" > 1);         // true
console.log("02" > 1);        // true
console.log(true == 1);       // true
console.log(true < 1);        // false
console.log(false == 0);      // true
console.log(false < 1);       // true

console.log(null > 0);        // false      
console.log(null == 0);       // false      equality check == & comparison <>>=<= works differently
console.log(null >= 0);       // true       comparison converts null to a number, trating it as a zero, that's why null >= 0 true but null == 0 false

console.log(undefined > 0);   // false
console.log(undefined == 0);  // false
console.log(undefined < 0);   // false

console.log("2" === 2);       // false       strict check, checks datatypes first and thn compares

