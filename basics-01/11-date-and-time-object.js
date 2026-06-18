// ================= Date and Time Object =================

// Date is a moment in time and it starts and calculated from January 1, 1970 & it is calculated in miliseconds

let myDate = new Date()
console.log(typeof myDate)             // object
console.log(myDate);                   // 2026-06-18T13:09:01.891Z
console.log(myDate.toString());        // Thu Jun 18 2026 13:09:01 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());    // Thu Jun 18 2026
console.log(myDate.toLocaleString());  // 6/18/2026, 1:09:01 PM



// order : year, month, day, hour, minute, second
// Month start from 0 to 11 ==> 0 = Jan, 1 = Feb, and so on
let myCreatedDate1 = new Date(2026, 05, 15);
console.log(myCreatedDate1.toString())
let myCreatedDate2 = new Date(2026, 05, 15, 20, 30, 23);
console.log(myCreatedDate2.toString())

let myCreatedDate3 = new Date("2026-06-14");  // month starts from 1 ==> 1 = jan, 2 = feb,and so on
console.log(myCreatedDate3.toString())

// Month-Day-Year
let myCreatedDate4 = new Date("06-18-2026");  // month starts from 1 ==> 1 = jan, 2 = feb,and so on
console.log(myCreatedDate4.toString())



let myTimeStamp = Date.now()
console.log(myTimeStamp)  // mili seconds
console.log(myCreatedDate4.getTime())
console.log(Math.round( Date.now() / 1000 ) )  // in seconds
console.log(Math.round( ( Date.now() / 1000 ) / 60 ) )  // in minutes
console.log(Math.round( ( ( Date.now() / 1000 ) / 60 ) / 60) )  // in hours



let date = new Date()
console.log(date)
console.log(date.getMonth() + 1) // 5 + 1 ==> 5 = june
console.log(date.getDay())


// this method is important as you can customize it to your own needs
newDate.toLocaleString('default', {
    weekday: "long",
})




