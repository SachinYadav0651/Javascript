const accountId = 12345
let accountEmail = "Sachin@gmail.com"
var accountPassword = "234567"
accountCity = "Nagpur"
let accountState;           // will show undefined when we compile it

// accountId = 34567      Not allowed
/* we don't use var in modern time, only use let for variables 
--prefer to not use var because of issue in block scope and functional scope*/
// use of semicolumn is optional in javascript

accountEmail = "Chirantan@gmail.com"
accountPassword = "000000"
accountCity ="Jaipur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


