// IIFE --  (Immediately Invoked Function Expression)
// An IIFE is a function expression that is executed immediately after it's created. 
// It creates a private scope, helping to avoid polluting the global namespace.
// Syntax: ()() -- (function() {Code here runs immediately})();    -- (function myFunc() {This is still an IIFE})();
// Or using arrow function:
// Syntax: ()() -- (() => {Code here runs immediately})();

// Why Use IIFE?
// ✅ Avoid global variable pollution
// ✅ Create a private scope for variables
// ✅ Encapsulation
// ✅ Useful in module patterns
// ✅ Commonly used in legacy JS before let, const, and modules existed

// (function(){
//     console.log(`DB CONNECTED`);           // DB CONNECTED
// })(); 

// Named IIFE
// (function chai(){
//     console.log(`CHAI DB CONNECTED`);           // CHAI DB CONNECTED
// })();  

// if executing two IIFE functions thn add semicolumn(;) after first iife function, only thn second function will be executed else throw error
// we add ; to stop the execution of ist iife function so that next one can execute

// UnNamed IIFE
// (() => {
//     console.log(`COFFEE DB CONNECTED`);         // COFFEE DB CONNECTED
// })();


// IIFE with Parameters:
// ((name) => {
//     console.log(`COFFEE DB CONNECTED ${name}`);         // COFFEE DB CONNECTED Sachin
// })("Sachin")






