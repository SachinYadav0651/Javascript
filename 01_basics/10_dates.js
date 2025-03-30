
let myDate = new Date();

// console.log(typeof(myDate));                 // object
// console.log(myDate);                         // 2025-03-29T11:10:07.502Z
// console.log(myDate.toISOString());           // 2025-03-29T11:10:07.502Z
// console.log(myDate.toJSON());                // 2025-03-29T11:10:07.502Z
// console.log(myDate.toUTCString());           // Sat, 29 Mar 2025 11:10:07 GMT
// console.log(myDate.toString());              // Sat Mar 29 2025 11:01:33 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());          // Sat Mar 29 2025
// console.log(myDate.toTimeString());          // 11:10:07 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());        // 3/29/2025, 11:01:33 AM 
// console.log(myDate.toLocaleDateString());    // 3/29/2025
// console.log(myDate.toLocaleTimeString());    // 11:10:07 AM

// let myCreatedDate = new Date(2025, 0, 23)        // Thu Jan 23 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// let myCreatedDate1 = new Date(2025, 0, 23, 4, 5)
// let myCreatedDate2 = new Date("2025-01-23");
// let myCreatedDate3 = new Date("01-14-2025")

// // console.log(`${myCreatedDate}\n${myCreatedDate1}\n${myCreatedDate2}\n${myCreatedDate3}`);    // converts everything to String as it's considering `` as string
// console.log(myCreatedDate);    // 2025-01-23T00:00:00.000Z
// console.log(myCreatedDate1);   // 2025-01-23T04:05:00.000Z
// console.log(myCreatedDate2);   // 2025-01-23T00:00:00.000Z
// console.log(myCreatedDate3);   // 2025-01-14T00:00:00.000Z
// console.log(myCreatedDate1.toLocaleString());   // 1/23/2025, 4:05:00 AM
// console.log(myCreatedDate.toDateString());      // Thu Jan 23 2025
// console.log(myCreatedDate1.toTimeString());     // 04:05:00 GMT+0000 (Coordinated Universal Time)

// let timeStamp = Date.now()
// console.log(typeof(timeStamp));     // number

// console.log(timeStamp);        // 1743248205810  - return time in milliseconds from date 1 Jan 1970(epoch date time)
// console.log(myCreatedDate.getTime());  // 1737590400000 -- used with Date objects to return the number of milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC).
// console.log(Date.now()/1000);    // 1743326773.882 -- converting time - milliseconds to seconds, will give result in decimal
// console.log(Math.floor(Date.now()/1000));  //  1743326773

// console.log(myCreatedDate.getDay());   // 4 - thursday
// console.log(myCreatedDate.getUTCDate());  // 23
// console.log(myCreatedDate.getTimezoneOffset());
// console.log(myCreatedDate1.getSeconds()); // used with Date objects to retrieve the seconds (from 0 to 59) of a specific date and time.


// toLocaleString()    -- dateObject.toLocaleString([locales, [options]]);
// used to convert a Date object into a string that represents the date and time, formatted according to a specific locale and options.

// const now = new Date();
// console.log(now.toLocaleString());  // Example Output: "3/30/2023, 3:45:23 PM" (in en-US locale)

// console.log(now.toLocaleString('fr-FR'));  // Output: "30/03/2023 à 15:45:23"

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
// console.log(now.toLocaleString('default', options)); 
// // Output: "Sunday, March 30, 2025 at 09:59:02 AM"
// // weekday: 'long' → Full name of the day
// // year: 'numeric' → Full year
// // month: 'long' → Full name of the month
// // hour: '2-digit' → Two-digit hour format

// console.log(now.toLocaleString());     // 3/30/2025, 9:59:02 AM


































