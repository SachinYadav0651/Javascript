// const age = 26
// console.log(age);                 // 26
// console.log(age.toString());      // 26
// console.log(typeof(age));         // number


// const score = new Number(100)
// console.log(score);               // [Number: 100]

// console.log(score.toString());    // 100
// console.log(typeof(score));       // object

// console.log(score.toString().length);        // 3
// console.log(score.toString().includes(1));   // true


// toFixed()     -- num.toFixed(digits);
// used to format a number using fixed-point notation. 
// It rounds the number to a specified number of decimal places and returns the result as a string.
// It does not return a number, but a string formatted with the specified number of decimal places.

// let num = 234.56784
// console.log(num.toFixed(2));  // "234.57"
// console.log(num.toFixed(4));  // "234.5678"
// console.log(num.toFixed(0));  // "235"
// console.log(num.toFixed(6));  // "234.567840"


// toString()    -- num.toString([radix]);
// used to convert a number (or any other value) to a string representation. When called on a number, it returns the number as a string.

// Basic Conversion (Base 10)
// let num1 = 123
// console.log(num1.toString());

// Conversion to Binary (Base 2)
// let num = 10;
// let binaryStr = num.toString(2);
// console.log(binaryStr);  // "1010"

// Conversion to Octal (Base 8)
// let octalStr = num.toString(8);
// console.log(octalStr);  // "12"

// Conversion to Hexadecimal (Base 16)
// let num2 = 255;
// let hexStr = num2.toString(16);
// console.log(hexStr);  // "ff"

// Conversion to Base 36
// let num3 = 123456;
// let base36Str = num3.toString(36);
// console.log(base36Str);  // "2n9c"

// Converting Infinity or NaN:
// let infinityNum = Infinity;
// console.log(infinityNum.toString());  // "Infinity"

// let nanNum = NaN;
// console.log(nanNum.toString());  // "NaN"


// toPrecision()      -- num.toPrecision(precision);
// used to format a number to a specified length of significant digits. 
// It returns a string representing the number with the given number of significant digits.

// let num = 123.45678; 
// console.log(num.toPrecision(3));  // "123"  (rounded to 3 significant digits)
// console.log(num.toPrecision(5));  // "123.46"  (rounded to 5 significant digits)
// console.log(num.toPrecision(2));  // "1.2e+2"  (rounded to 2 significant digits, scientific notation)     

// let num1 = 12345.6789;
// console.log(num1.toPrecision(3));  // "12300"       

// let num3 = 2234567.879 
// console.log(num3.toPrecision(4));  // 2235000 

// let num2 = 0.00456;
// console.log(num2.toPrecision(3));  // "0.456"       



















