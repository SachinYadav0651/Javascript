// 🔁 1. Conditional Statements
// if, else if, else
// Used to execute code based on conditions.

// let age = 20;

// if (age < 18) {
//   console.log("Minor");
// } else if (age >= 18 && age < 60) {
//   console.log("Adult");
// } else {
//   console.log("Senior");
// }


// 🔄 2. Switch Statement
// Used for multiple possible values of a variable.

// let day = "Monday";                   // It is case sensitive, Also if string is declared thn pass string only in switch cases  
// switch (day) {
//   case "Monday":
//     console.log("Start of the week");
//     break;                            // if we don't use break, will execute all cases but not default
//   case "Friday":
//     console.log("Weekend coming");
//     break;                            // use shortcut - first Select - shift + alt + down arrow   

//   default:
//     console.log("Midweek");
// }


// 🔂 3. Loops

// For loop
// Runs a block of code a specific number of times.
// for (let i = 1; i <= 5; i++) {
//     console.log("Count:", i);
//   }

//  🚫 4. Break & Continue
// break — exits the loop.
// continue — skips current iteration.

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) continue; // skip 3
//     if (i === 5) break;    // stop at 4
//     console.log(i);        // 1 2 4 
//   }


// while loop
// Repeats while a condition is true.
// let i = 1;
// while (i <= 5) {
//   console.log("Count:", i);
//   i++;                        // to make an infinite loop, remove this
// }


// do...while loop
// Runs at least once, then repeats if the condition is true.
// let i = 6;
// do {
//   console.log("Count:", i);
//   i++;
// } while (i <= 5);


// ✅ 5. Ternary Operator
// It’s a shortcut for if...else — very useful for quick decisions.
// Syntax: condition ? expression_if_true : expression_if_false;
// let age = 18;
// let status = (age >= 18) ? "Adult" : "Minor";
// console.log(status); // Adult





