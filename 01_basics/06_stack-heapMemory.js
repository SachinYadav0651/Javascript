// Stack (Primitive), Heap (Non-Primitive)


// Stack (Primitive) (Call by Value)
let myName = "Sachin"

let anotherName = myName;   // It stores in stack memory, and assigns copy of it
anotherName = "Chirantan";  // any changes you will do, will update only in copied value

console.log(anotherName);
console.log(myName);


// Heap (Non-Primitive) (Call by reference)

let user = {                // It stores in heap memory
    name: "Sachin",
    email: "sy@gmail.com",
    upi: "sy@ybl"
}

let user1 = user;         // when we assign another variable thn it shares refence of that

user1.name = "Chirantan"  // any changes you do, will be updated in the refence of the value you shared
user1.upi = "chir@ybl";

console.log(user1);
console.log(user);






