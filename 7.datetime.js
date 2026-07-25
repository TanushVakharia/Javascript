let myDate = new Date();
//console.log(typeof myDate); // Outputs "object"
//console.log(myDate);
//console.log(myDate.toString()); // Outputs the full date and time
//console.log(myDate.toDateString()); // Outputs just the date part
//console.log(myDate.toJSON()); // Outputs the date in JSON format
//console.log(myDate.toISOString()); // Outputs the date in ISO format
//console.log(myDate.toLocaleDateString()); // Outputs the date in local format
//console.log(myDate.toLocaleString()); // Outputs the date and time in local format

let myCreatedDate = new Date(2026, 7, 25); // July 25, 2026 (months are zero-indexed)
//console.log(myCreatedDate.toString()); // Outputs the full date and time for July 25, 2026
//console.log(myCreatedDate.toDateString()); // Outputs just the date part for July 25, 2026

let myTimestamp = Date.now();
//console.log(myTimestamp); // Outputs the current timestamp in milliseconds since January 1, 1970
//console.log(myCreatedDate.getTime()); // Outputs the timestamp for July 25, 2026 in milliseconds since January 1, 1970

console.log(myCreatedDate.getFullYear()); // Outputs the year (2026)
console.log(myCreatedDate.getMonth()); // Outputs the month (7 for August, since months are zero-indexed)
console.log(myCreatedDate.getDate()); // Outputs the day of the month (25)
console.log(myCreatedDate.getDay()); // Outputs the day of the week (0 for Sunday, 1 for Monday, etc.)
