
// abs()      -- Math.abs(x)
// returns the absolute value of a given number. 
// It removes the sign of the number, converting negative values to positive and leaving positive values unchanged.

// let num = -25
// let result = Math.abs(num);

// console.log(result);           // 25

// let num1 = 25
// console.log(Math.abs(num1));   // 25

// let num2 = 0
// console.log(Math.abs(num2));   // 0

// let num3 = null
// console.log(Math.abs(num3));   // 0

// let num4 = NaN
// console.log(Math.abs(num4));   // NaN

// let num5;
// console.log(Math.abs(num5));   // NaN

// console.log(Math.abs(3.5));    // 3.5
// console.log(Math.abs(-3.5));   // -3.5
// console.log(Math.abs("Sachin"));   // NaN



// round()      -- math.round(x) 
// used to round a number to the nearest integer. 
// If the decimal part of the number is 0.5 or greater, the number is rounded up to the next integer. 
// If it's less than 0.5, it is rounded down to the nearest integer.

// console.log(Math.round(1.7));        // 2
// console.log(Math.round(1.5));        // 2
// console.log(Math.round(1.4));        // 1
// console.log(Math.round(-1.7));       // -2
// console.log(Math.round(-1.5));       // -1, -1 greter value than -1.5
// console.log(Math.round(-1.4));       // -1
// console.log(Math.round(0));          // 0
// console.log(Math.round(NaN));        // NaN
// console.log(Math.round());           // NaN
// console.log(Math.round(null));       // 0
// console.log(Math.round(5));          // 5
// console.log(Math.round(-5));         // -5
// console.log(Math.round("Sachin"));   // NaN
// console.log(Math.round(true));       // 1
// console.log(Math.round(false));      // 0



// min() & max()       -- Math.min(value1, value2, ..., valueN)    --  Math.max(value1, value2, ..., valueN)
// used to find the smallest or largest number in a given set of numbers, respectively.

// console.log(Math.min(3, 5, 1, 8));   // Output: 1
// console.log(Math.min(-3, -5, -1));   // Output: -5
// console.log(Math.min(10));            // Output: 10
// console.log(Math.min(10, -1, Infinity)); //-1 

// console.log(Math.max(3, 5, 1, 8));   // Output: 8
// console.log(Math.max(-3, -5, -1));   // Output: -1
// console.log(Math.max(10));            // Output: 10
// console.log(Math.max(10, -1, Infinity)); // Infinity



// floor()     -- math.floor(x)
// used to round a number down to the nearest integer, regardless of the decimal part. 
// It always returns the largest integer less than or equal to the given number.

// console.log(Math.floor(4.9));   // Output: 4
// console.log(Math.floor(4.1));   // Output: 4
// console.log(Math.floor(-4.1));  // Output: -5
// console.log(Math.floor(-4.9));  // Output: -5


// ceil()     -- math.ceil(x)
// used to round a number up to the nearest integer. 
// Unlike Math.floor() (which rounds down), Math.ceil() always rounds a number up, no matter what the decimal part is.

// console.log(Math.ceil(4.1));  // Output: 5
// console.log(Math.ceil(4.9));  // Output: 5
// console.log(Math.ceil(-4.1)); // Output: -4
// console.log(Math.ceil(-4.9)); // Output: -4



// random()    -- math.random()
// used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive). 
// This method is often used in scenarios where randomness is needed, such as for generating random values, shuffling items, or making random decisions.

// Math.random() -> Generates a random floating-point number between 0 and 1.
// Random Integer Between min and max :-
// Generates a random integer within a specific range - console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Random Boolean (True or False) -> Math.random() < 0.5

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.random() < 0.5);    // will return either true or false

// let max = 999
// let min = 100

// console.log(Math.floor(Math.random() * (max - min + 1)))
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)    // use this formula

// Simulating Dice Rolls (Random Integer Between 1 and 6)

// let roll = Math.floor(Math.random() * 6) + 1;
// console.log("Dice Roll:", roll);  // Output: A random number between 1 and 6

// Random Coin Toss (Heads or Tails)

// let coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
// console.log("Coin Toss Result:", coinToss);  // Output: "Heads" or "Tails"

// Shuffling an Array (e.g., Shuffling Cards)    -- will study later this ex
// let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// deck.sort(() => Math.random() - 0.5);
// console.log("Shuffled Deck:", deck);  // Output: A shuffled array of numbers (e.g., [7, 3, 9, 5, 10, 4, 1, 6, 8, 2])








 

























