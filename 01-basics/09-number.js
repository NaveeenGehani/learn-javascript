// Number in JS


// ============= Number ===============
const score = 500  // implicitly detected as Number by JS
console.log(score)
console.log(typeof score) // number

const balance = new Number(200.534553245);  // explicitly number
console.log(balance)
console.log(typeof balance) // object


// Number Methods
/*
constructor : ƒ Number()
toExponential : ƒ toExponential()
toFixed : ƒ toFixed()
toLocaleString : ƒ toLocaleString()
toPrecision : ƒ toPrecision()
toString : ƒ toString()
valueOf : ƒ valueOf()

// read about Number Methods here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/


// Number Methods
console.log(balance.toString().length)
console.log(balance.toFixed(3));  // it is for value precision. How many fractional digits you want
console.log(balance.toPrecision(3)) // it is for rounding off values


const hundreds = 139384839
console.log(hundreds.toLocaleString())  // it makes it comma separated values like 139,384,839 && by default it is in US Standard
console.log(hundreds.toLocaleString('en-IN'))  // indian standard





