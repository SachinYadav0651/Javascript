// this keyward -- refers to the object that is executing the current function.

// const user = {
//     username: "Chirantan",
//     age: 28,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to the website`);  // // Chirantan, welcome to the website
//         console.log(this);  
//         // Output: {
//         //     username: 'Chirantan',
//         //     age: 28,
//         //     welcomeMessage: [Function: welcomeMessage]
//         //   }
//     }  
// }
// user.welcomeMessage()  
// user.username = "Sachin"
// user.welcomeMessage()      // Sachin, welcome to the website

// How this behaves depends on context:
// 1. In the global scope:
// console.log(this); // {} -- In browsers, this is the `window` object

// 2. Inside an object method:
// const person = {
//     name: 'Alice',
//     greet() {
//       console.log(this.name); // 'Alice'
//     }
//   };
//   person.greet();
  
// 3. In a regular function:
// function sayHi() {
//     console.log(this); // In strict mode: undefined; otherwise: window/global
//   }
// sayHi();

// function chai(){
//     const name = "Sachin"
//     console.log(this.name);   // undefined -- this context works only in objects, here will show undefined
// }
// chai()

// 4. In an arrow function:
// const obj = {
//     name: 'Bob',
//     greet: () => {
//       console.log(this.name); // undefined - arrow functions don't bind their own `this`
//     }
//   };
//   obj.greet();


// ---------------------------------------------------------------------------------------------------------------------
// Arrow function
// basic function syntax -- function(a, b){}
// syntax -- const variableName = (a, b) => {}    -- explicit return

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));   // 7

// Shorthand for single expression: // Implicit return
// syntax -- const add = (a, b) => a + b;    -- const add = (a, b) => (a + b);
// no need to use curly braces{} and return statement, if using {} we hv to pass return value

// const multiply = (a, b) => a * b;
// console.log(multiply(3, 4)); // 12

// const add = () => ({username: "Sachin"})   // use () if returning object in arrow function
// console.log(add()); // { username: 'Sachin' }









  
  
