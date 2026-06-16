// your code goes here

// ------------- Operation ---------------

let value = 3
let negativeValue = -value
console.log(negativeValue) // -3

console.log(4 + 2)  // 6
console.log(4 - 2)  // 2
console.log(4 * 2)  // 8
console.log(4 ** 2) // 16
console.log(4 / 2)  // 2
console.log(4 % 2)  // 0



let str1 = "Hello"
let str2 = " Naveen"

let str3 = str1 + str2

console.log(str3) // Hello Naveen



console.log("1" + 3)     // 13
console.log(1 + "3")     // 13
console.log("1" + "3")   // 13
console.log("1" + 3 + 3) // 133
console.log(1 + "3" + 3) // 133
console.log(1 + 3 + "3") // 43

// in JS, numbers are converted to string from left to right order, everything on the right of string is converted to strin and and everything on the left remains as it is.


console.log(true)  // true
console.log(+true)  // 1  => this practice is not recommended.



let counter = 1;
console.log(counter) // 1
console.log(++counter) // 2  => prefix increment = increase first, then use. same for prefix decrement ==> --counter

console.log(counter) // 2
console.log(counter++) // 2 => postfix increment = use first, then increase. same for postfix decrement ==> counter--
console.log(counter) // 3
