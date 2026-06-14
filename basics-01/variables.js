
console.log("hello")


const accountId = 12345 // const keyword is used to declare constant variables

/*
two keywords to declare normal variables : 
 - let is block level declaration of variable -> let is block scope
 - var is glo
*/

// let keyword -> new way
let accountEmail = "naveen@gmail.com"

// var keyword -> old way
var accountPassword = "12345678";

// dont declare variables without the variable declaration keyword
accountCity = "Karachi"

let accountState; // when variable is not initialized, it has undefined value


// accountId = 2; // not allowed to change constant declaration of a varible

// changing the values 
accountEmail = "noha@gmail.com"
accountPassword = "23456789"
accountCity = "Lahore"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])