
// Execution Context (EC)
// (different for different consoles (browser, dino, node, etc))

// Types of Execution Context:
	// 1. Global Execution Context {} – created first.
	// 2. Functional Execution Context – created when a function is called.
	// 3. Eval Execution Context (a property of global context) – created during eval() (rarely used).

// Global Execution Context (GEC)    
// Two phases (Steps of Global Execution Context Creation:)

// 1. Memory Creation Phase (Hoisting Phase):
    //  JS engine scans the code and:
    //  Allocates memory for variables (var) and sets them to undefined.
    //  Allocates memory for function declarations and stores the entire function.
    //  Initializes the this keyword (points to window in browser / global in Node.js).
    //  ✅ Let & const are hoisted but kept in the Temporal Dead Zone (TDZ) – not initialized.

// 2. Execution phase:
    //  The code runs line by line.
    //  Variables are assigned to actual values.
    //  Functions are invoked – each function call creates a new Function Execution Context (FEC) and is pushed to the Call Stack.
    //  After execution, each context is popped off the stack.


// Code Example:
// let val1 = 10;
// let val2 = 5;

// function addNum(num1, num2){
//     let total = num1 + num2;
//     return total;
// }

// let result1 = addNum(val1, val2);
// let result2 = addNum(10, 2);

// Step-by-Step Execution

// 1. Global Execution Context (GEC) is Created

// this -- stored inside this context

// 1. Memory Creation Phase (Hoisting):

// Identifier	        Initial Value
// val1	          -      uninitialized (TDZ)
// val2	          -      uninitialized (TDZ)
// addNum	      -      Function definition
// result1	      -      uninitialized (TDZ)
// result2	      -      uninitialized (TDZ)
// this	          -      global object (window in browser)

// let variables (val1, val2, result1, result2) are hoisted but uninitialized → in the Temporal Dead Zone
// addNum function is hoisted with its full body
// this is initialized

//  2. Global Execution Context – Execution Phase

// Now the JavaScript engine starts executing code line by line.

// ✅ Line 1: let val1 = 10;
// val1 is assigned value 10
// ✅ Line 2: let val2 = 5;
// val2 is assigned value 5
// ✅ Line 3–6: Function Declaration addNum(num1, num2)
// Already hoisted – nothing happens now

// ✅ Line 7: let result1 = addNum(val1, val2);
// 👉 Function Call: addNum(10, 5)

// New Function Execution Context (FEC) is created
// Call Stack:

// i. New Variable Environment + Execution Thread
// 	1) Memory Phase 
// 	    a) val1 = Undefined, 
// 	    b) Val2 = Undefined,
// 	    c) Total = Undefined
// 	2) Execution Context
// 		a) val1 = 10, 
// 		b) Val2 = 5,
// 		c) Total = 15
// ✔️ result1 is now 15
// ✅ FEC is popped off the stack (Sends to Global execution context and deletes the above New Variable Environment + Execution Thread)

// ✅ Line 8: let result2 = addNum(10, 2);
// 👉 Function Call: addNum(10, 2)
// New FEC created
// Call Stack:

// i. New Variable Environment + Execution Thread
// 	1) Memory Phase 
// 		a) val1 = Undefined, 
// 		b) Val2 = Undefined,
// 		c) Total = Undefined
// 	2) Execution Context
// 		a) val1 = 10, 
// 		b) Val2 = 2,
// 		c) Total = 12
// ✔️ result2 is now 12
// ✅ FEC is popped off the stack (Sends to Global execution context and deletes the above New Variable Environment + Execution Thread)





// 🧠 What is the Call Stack?

// The Call Stack is a data structure that JavaScript uses to keep track of function calls.
// It works on a LIFO basis: Last In, First Out
// When a function is called, it is pushed onto the stack.
// When the function finishes, it is popped off the stack.


// 🧾 Code Example:
// javascript
// Copy
// Edit
// let val1 = 10;
// let val2 = 5;

// function addNum(num1, num2){
//     let total = num1 + num2;
//     return total;
// }

// let result1 = addNum(val1, val2);
// let result2 = addNum(10, 2);
// 🔄 Step-by-Step Call Stack Execution:

// ✅ Step 1: Start
// 📌 When the code starts running, Global Execution Context (GEC) is created and pushed onto the call stack.

// Call Stack:
// ┌────────────────────────┐
// | Global Execution (GEC) |
// └────────────────────────┘

// ✅ Step 2: Define Variables and Function
// val1, val2 are declared and assigned.

// addNum() is just defined (not executed yet).

// The function is hoisted and ready.

// 🧘‍♂️ Still just GEC in the stack.

// ✅ Step 3: Call addNum(val1, val2)
// JavaScript calls the function addNum(10, 5)

// A new Function Execution Context (FEC) is created and pushed to the call stack.

// Call Stack:
// ┌────────────────────────┐
// | addNum Execution       |
// ├────────────────────────┤
// | Global Execution (GEC) |
// └────────────────────────┘

// Inside addNum:

// num1 = 10, num2 = 5
// total = 15
// return 15

// 📤 Function returns → FEC is popped

// Call Stack:
// ┌────────────────────────┐
// | Global Execution (GEC) |
// └────────────────────────┘
// ✅ result1 = 15

// ✅ Step 4: Call addNum(10, 2)
// Again, a new FEC is created and pushed.

// Call Stack:
// ┌────────────────────────┐
// | addNum Execution       |
// ├────────────────────────┤
// | Global Execution (GEC) |
// └────────────────────────┘
// Inside addNum:

// num1 = 10, num2 = 2
// total = 12
// return 12

// 📤 Function finishes → FEC is popped

// Call Stack:
// ┌────────────────────────┐
// | Global Execution (GEC) |
// └────────────────────────┘
// ✅ result2 = 12

// ✅ Step 5: Program Finishes
// Once everything is done, even the Global Execution Context is popped off, and the Call Stack is empty.


// Call Stack:
// (empty ✅)

// 📌 Final Output Values:
// val1 = 10
// val2 = 5
// result1 = 15
// result2 = 12


// 🧪 Summary (in human words):
// Think of the call stack as a to-do list for JavaScript.
// Every time a function is called, it's like adding a task to the top of the list.
// JavaScript finishes the top task first, then moves to the next.
// When there are no tasks left, the program ends.





		












