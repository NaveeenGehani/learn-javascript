
// Datatype conversion

let score = "33"

console.log(typeof score) // string

let valueInNumber = Number(score) // convert from string to number

console.log(typeof valueInNumber) // number



let score2 = "33abc"

console.log(typeof score2) // string

let valueInNumber2 = Number(score2) // conversion from string to number

console.log(valueInNumber2) // NaN => Not a Number ==> bcz it has number + letter

console.log(typeof valueInNumber2) // number



let score3 = null

console.log(typeof score3) // Object

let valueInNumber3 = Number(score3)

console.log(valueInNumber3) // 0

console.log(typeof valueInNumber3) // number



let score4 = undefined

console.log(typeof score4) // undefined

let valueInNumber4 = Number(score4)

console.log(valueInNumber4) // NaN => Not a Number

console.log(typeof valueInNumber4) // number



let score5 = true

console.log(typeof score5) // boolean => 1 for true & 0 for false

let valueInNumber5 = Number(score5)

console.log(valueInNumber5) // 1

console.log(typeof valueInNumber5) // number



let score6 = "Naveen"

console.log(typeof score6) // string

let valueInNumber6 = Number(score6)

console.log(valueInNumber6) // NaN => Not a Number

console.log(typeof valueInNumber6) // number



let score7 = 102

console.log(typeof score7) // number

let valueInBoolean = Boolean(score7)  // non-zero value is true & 0 is false

console.log(valueInBoolean) // true

console.log(typeof valueInBoolean) // boolean


let score8 = ""

console.log(typeof score8) // string

let valueInBoolean = Boolean(score8)  // non-empty string is true & empty string is false

console.log(valueInBoolean) // false

console.log(typeof valueInBoolean) // boolean



let score9 = 24

console.log(typeof score9) // number

let valueInString = String(score9)  // non-empty string is true & empty string is false

console.log(valueInString) // "24"

console.log(typeof valueInString) // string




