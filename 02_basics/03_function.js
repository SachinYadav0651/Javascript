// Functions -- Functions are reusable blocks of code designed to perform a particular task.
// function declaration -- function functionName(){ }
// we can also assign a function to a variable also, variable are most powerful in javascript
// const greet = function(name) { }

// function sayMyName(){
//     console.log('S');
//     console.log('A');
//     console.log('C');
//     console.log('H');
//     console.log('I');
//     console.log('N');  
// }

// sayMyName     // only reference of function is there
// sayMyName()   // () - it means function will be executed

// note: if you need o/p from function outside the fun thn you need to include retuen at the end of the fun

// function addTwoNumbers(num1, num2) {       // num1 & num2 are called parameters of function, 3 & 4 are called arguments
//     return num1 + num2;
//     console.log("Sachin");  // this line should not be printed as it is written after return
//     // once we return the function thn nothing will be executed after that 
// }

// addTwoNumbers()  // No o/p as functions only returning 
// console.log(addTwoNumbers());  // NaN - if no arguments provided not a number (NaN) will be o/p
// addTwoNumbers(3, 4)           // no output will be there because function only returning the output but not printing
// console.log(addTwoNumbers(3, 4));   // Out[put: 7 will be printed here

// will study later this part
// console.log(addTwoNumbers(3, "a")); // "3a"  --  function is not checking whether arguments provided are number or string, 
// for that we have to write a logic to check, but if not given it will do calculation acc. to javascript, here it will treat both numbers as a string

// Note: not do this type of mistake
// function minusTwoNumbers(num1, num2) {
//     console.log(num1 - num2); 
// }

// minusTwoNumbers()
// console.log(minusTwoNumbers(6,1));
// const result = minusTwoNumbers(4, 3)  // return statement is not written in function so it will not reurn anything and will show reusult as undefined
// console.log("Result: ", result);                  // Result: undefined

// function minusTwoNum(num1, num2) {
//     let result1 = num1 - num2
// }

// console.log(minusTwoNum(6,1)); // will return undefined as function is not returning any result value, it just holding the value
// note: if you need o/p from function outside the fun thn you need to include retuen at the end of the fun


//-------------------------------

// strings as a parameter

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());          // undefined just logged in  -- as no argument given undefined will be taken
// console.log(loginUserMessage("Sachin"));  // Sachin just logged in

// function loginUser(username){
//     // if(username === undefined){
//     //     console.log("please enter your name");    
//     // }

//     if(!username){
//         return "please enter a username"; 
//     }
//     return `${username} just logged in`
// }

// loginUser()         // no o/p 
//console.log(loginUser());
//console.log(loginUser("Sachin"));

// const result = loginUser()
// console.log(result);

// function loginUser(username = "Sam"){
//          if(!username){
//              return "please enter a username"; 
//          }
//          return `${username} just logged in`
//      }
            
//     console.log(loginUser());          // Sam just logged in -- by default willtake "Sam" & won't go in if condition
//     console.log(loginUser("Sachin"));  // Sachin just logged in  -- if name argument is given thn will not take bydefault name

//--------------------------------------------------------
// numbers as a parameter 

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(100));     // 100

// console.log(calculateCartPrice(100, 200, 300)); // 100

// Rest Operator (...) -- To gather multiple elements into a single array or object.
// Use case: When defining functions or destructuring
// function calculateCartAmount(...num1){
//     return num1
// }
// console.log(calculateCartAmount(100, 200, 300));   // [ 100, 200, 300 ]

// function calculateCart(value1, value2,...num1){
//     return num1
// }
// console.log(calculateCart(100, 200, 300, 1000));  // [300, 1000]

// ...rest ->	Gathers elements -	Functions, destructuring -	function(...args)
// ...spread ->	Spreads elements - Arrays, objects, function calls -	[...arr], {...obj}


// How to handle objects in function

// const user = {
//     name: "Sachin",
//     age: 26
// }

// const user1 = {
//     name: "Chirantan",
//     age: 28
// }

// function handleObject(anyObject){
//     console.log(`User name is ${anyObject.name} & age is ${anyObject.age}`); 
// }

// handleObject(user)    // User name is Sachin & age is 26
// handleObject(user1)   // User name is Chirantan & age is 28

// handleObject({
//     name: "Yadav",
//     age: 27
// })                     // User name is Yadav & age is 27  -- we can directly give object also


// How to handle Arrays in function

// const myArray = [100, 200, 300]
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myArray))     // 200
// console.log(returnSecondValue([2, 4, 5]));  // 4    -- also we can directly pass an array 


















