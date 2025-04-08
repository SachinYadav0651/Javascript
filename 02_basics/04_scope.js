// let, const & var
// Always declare your variables with const unless you know you'll need to reassign it later — in that case, use let.
// Use let only if the variable needs to change.
// Avoid var unless dealing with legacy code or function-scoped behavior is intentionally needed. - don't use var in js

// let a = 20
// const b = 34
// var c = 45

// console.log(a);   // 20
// console.log(b);   // 34
// console.log(c);   // 45    -- no problem in global scope

// problem comes when using var inside {} or block scope

// if (true) {
//    let a = 20
//    const b = 34
//    var c = 45
// }

// console.log(a);   // a is not defined -- will throw an error as it is declared inside the {}
// console.log(b);   // b is not defined -- will throw an error as it is declared inside the {}
// console.log(c);      // 45 , this the problem 


// variables declared in global scope can be accessed inside the local or block scope but vice versa we can't access.
//  let a = 300
//  let c = 400
//  var d = 500

//  if (true) {
//     let a = 20
//     const b = 34
//     var d = 50                     // don't use
//     console.log("Inner: ", a);     // 20
//     console.log(c);                // 400
//     console.log(d);                // 50
    
//  }

//  console.log(a);      // 300
//  console.log(d);      // 50   - will show value od d inside the block scope but not global scope value



// Nested functions

// function one(){                   // parent function
//    const username = "Sachin"

//    function two(){                // child function
//       const website = "Youtube"
//       console.log(username);      // child function can access variables declared inside parent function
//    }
//    // console.log(website);    // will throw an error - website is not defined as parent function can't access variables declared inside child function
//    two()                       // Sachin
// }
// one()
 

// Nested scope

// if (true) {
//    const username = "Sachin"
//    if (username){
//       const website = " Youtube"
//       console.log(username + website);     // Sachin Youtube
//    }
//    // console.log(website);     // will throw an error - website is not defined as it is defined in other(children) scope
// }
// console.log(username);   // will throw an error - usernmae is not defined as it is defined in other(block) scope


// function execution in normal function and expression(holding function in variable)

// console.log(addOne(5));  // 6 - normal declared function can be access before initialization

// function addOne(num){
//    return num + 1;
// }

// console.log(addTwo(7));  // Cannot access 'addTwo' before initialization - if function is holded in variable thn we can't access before initializaion

// const addTwo = function(num1){
//     return num1 + 2;
// }

// console.log(addTwo(7));  // 9


 
 








