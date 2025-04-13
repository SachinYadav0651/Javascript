// Truthy & falsy

// In JavaScript, truthy and falsy values are used in conditions like if or while to decide if code should run.
// Even if a value isn’t exactly true or false, JavaScript treats it like true (truthy) or false (falsy) when checking conditions.

// ✅ Falsy Values in JavaScript
// These are the values that evaluate to false in a boolean context:

// Value	       Description

// false       -    Boolean false
// 0	       -    Number zero
// -0	       -    Negative zero
// 0n	       -    BigInt zero
// ""	       -    Empty string
// null        -	Null value
// undefined   -	Undefined value
// NaN	       -    Not-a-Number

// 🧠 Mnemonic Tip: “0, null, undefined, NaN, false, ‘’ (empty string)” are all falsy.

// 🔍 Falsy Examples:
// if (0) console.log("Won't run");
// if ("") console.log("Won't run");
// if (null) console.log("Won't run");
// if (undefined) console.log("Won't run");
// if (false) console.log("Won't run");
// if (NaN) console.log("Won't run");



// ✅ Truthy Values in JavaScript

// All values except the falsy ones are considered truthy. This includes:

// Value	            Description

// true	          -    Boolean true
// "hello"	      -    Non-empty string
// 42	          -    Any non-zero number
// []	          -    Empty array
// {}	          -    Empty object
// function() {}  -    Any function
// Infinity	      -    Positive or negative infinity

// 🔍 Truthy Examples:
// if (42) console.log("Runs!");
// if ("hello") console.log("Runs!");
// if ([]) console.log("Runs!");
// if ({}) console.log("Runs!");
// if (function() {}) console.log("Runs!");



// 🔄 Practical Use Cases

// 1. Short-circuit Evaluation
// let name = userInput || "Default";  // If userInput is falsy, "Default" is used

// 2. Conditional Execution
// if (!username) {
//     console.log("Please provide a username");
//   }

// 3. Ternary Operator with Truthy/Falsy
// let status = isLoggedIn ? "Welcome!" : "Please log in.";
