// 🧮 1. Arithmetic Operators
// Used for basic mathematical operations.

// Operator             Description	            Example	          Result
// +	                Addition	            5 + 2	            7
// -	                Subtraction	            5 - 2	            3
// *	                Multiplication	        5 * 2	            10
// /	                Division	            5 / 2	            2.5
// %	                Modulus (remainder)	    5 % 2	            1
// **	                Exponentiation	        2 ** 3	            8
// ++	                Increment	            let x = 5; x++	    x = 6
// --	                Decrement	            let x = 5; x--	    x = 4


// Arithmetic Operators
// let a = 5, b = 2;
// console.log('Addition:', a + b);
// console.log('Subtraction:', a - b);
// console.log('Multiplication:', a * b);
// console.log('Division:', a / b);
// console.log('Modulus:', a % b);
// console.log('Exponentiation:', a ** b);

// Increment & Decrement
// let x = 5;
// console.log('Increment:', ++x);
// x = 5;
// console.log('Decrement:', --x);


//🔄 2. Assignment Operators
// Used to assign values to variables.

// Operator	            Example	            Same As
// =	                x = 5	            —
// +=	                x += 3	            x = x + 3
// -=	                x -= 3	            x = x - 3
// *=	                x *= 3	            x = x * 3
// /=	                x /= 3	            x = x / 3
// %=	                x %= 3	            x = x % 3
// **=	                x **= 2	            x = x ** 2

// Assignment Operators
// let y = 10;
// y += 5; console.log('+=', y);
// y -= 3; console.log('-=', y);
// y *= 2; console.log('*=', y);
// y /= 4; console.log('/=', y);
// y %= 3; console.log('%=', y);
// y **= 2; console.log('**=', y);



// 🤔 3. Comparison Operators
// Used to compare values.

// Operator	        Description	            Example	        Result
// ==	            Equal (loose)	        5 == '5'	    true
// ===	            Strict equal	        5 === '5'	    false
// !=	            Not equal	            5 != '5'	    false
// !==	            Strict not equal	    5 !== '5'	    true
// >	            Greater than	        5 > 3	        true
// <	            Less than	            5 < 3	        false
// >=	            Greater or equal	    5 >= 5	        true
// <=	            Less or equal	        3 <= 5	        true

// Comparison Operators
// console.log('==', 5 == '5');
// console.log('===', 5 === '5');
// console.log('!=', 5 != '5');
// console.log('!==', 5 !== '5');
// console.log('>', 5 > 3);
// console.log('<', 5 < 3);
// console.log('>=', 5 >= 5);
// console.log('<=', 3 <= 5);



// 🧠 4. Logical Operators
// Used with booleans.

// Operator	        Description	        Example	         Result
// &&	            Logical AND	        true && false	 false
// ||		        Logical OR          true || false    true
// !	            Logical NOT	        !true	         false

// Logical Operators
// console.log('Logical AND:', true && false);
// console.log('Logical OR:', true || false);
// console.log('Logical NOT:', !true);



// 🧪 5. Type Operators

// Operator	        Description	            Example	                Result
// typeof	        Type of a variable	    typeof 5	            'number'
// instanceof	    Checks instance	        x instanceof Array	    true/false

// Type Operators
// console.log('typeof 5:', typeof 5);
// console.log('typeof "hello":', typeof "hello");
// console.log('[1,2,3] instanceof Array:', [1,2,3] instanceof Array);



// 🧰 6. Bitwise Operators
// Works on binary representations.

// Operator	        Description             	Example
// &	            AND	                        5 & 1 → 1
// |                OR                          5 | 1 → 5
// ^	            XOR	                        5 ^ 1 → 4
// ~	            NOT	                        ~5 → -6
// <<	            Left shift	                5 << 1 → 10
// >>	            Right shift	                5 >> 1 → 2
// >>>	            Zero-fill right shift	    -5 >>> 1 → 2147483645

// Bitwise Operators
// console.log('Bitwise AND:', 5 & 1);
// console.log('Bitwise OR:', 5 | 1);
// console.log('Bitwise XOR:', 5 ^ 1);
// console.log('Bitwise NOT:', ~5);
// console.log('Left Shift:', 5 << 1);
// console.log('Right Shift:', 5 >> 1);
// console.log('Zero-fill Right Shift:', -5 >>> 1);



// 🎭 7. Ternary Operator
// Shorthand for if-else.

// let result = (age >= 18) ? "Adult" : "Minor";



// 🧩 8. Optional Chaining & Nullish Coalescing
// Optional Chaining (?.)
// let user = {};
// let name = user?.profile?.name; // undefined (instead of error)

// Nullish Coalescing (??)
// let value = null ?? "default"; // "default"

// Nullish Coalescing
// let input = null;
// let result = input ?? "Default value";
// console.log('Nullish Coalescing:', result);



// ⚙️ 9. Spread & Rest Operators (...)
// Spread
// let arr = [1, 2];
// let copy = [...arr]; // [1, 2]

// Rest
// function sum(...nums) {
//     return nums.reduce((a, b) => a + b);
//   }

// console.log(sum(1, 3));

  







