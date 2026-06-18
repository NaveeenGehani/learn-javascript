// ================== Math Object ================

console.log(typeof Math)  // object

// Math is a built in Object in JS. It is for sin, cos, e, PI. abs(), etc 
// Read about Math here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


console.log(Math.abs(-10)) // absolute value
console.log(Math.round(345.665)) // round off
console.log(Math.ceil(345.665)) // ceil 
console.log(Math.floor(345.665)) // floor
console.log(Math.pow(2,4)) // power
console.log(Math.random()) // random value & always in the range 0 and 1 = in the interval [0,1]

console.log(Math.random() * 100) // Interval [0, 100)
console.log((Math.random() * 100) + 1) // Interval [1, 100]
console.log(Math.floor(Math.random() * 100) + 1) // Interval [1, 100]


const min = 10
const max = 50

const randNum = Math.floor(Math.random() * (max - min + 1)) + min    // this is general formula for random number generation between a given range
console.log(randNum)