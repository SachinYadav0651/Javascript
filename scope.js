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
 let a = 300
 let c = 400
 var d = 500

 if (true) {
    let a = 20
    const b = 34
    var d = 50                     // don't use
    console.log("Inner: ", a);     // 20
    console.log(c);                // 400
    console.log(d);                // 50
    
 }

 console.log(a);      // 300
 console.log(d);      // 50   - will show value od d inside the block scope but not global scope value
 
 
 








