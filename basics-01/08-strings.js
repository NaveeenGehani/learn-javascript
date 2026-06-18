// Strings

// Strings in JS can be denoted with single quotes '' and double quotes ""
/*
// string concatenation
const firstName = "Naveen"
const lastName = "Kumar"
console.log(firstName + " " + lastName) // Naveen Kumar
console.log(typeof firstName) // string


// new syntax for Strings : String interpolation = backticks ``  ==> follow this syntax
console.log(`Hello, ${firstName + " " + lastName}`);




// this way we are explicitly initializing string as object. but under the hood the other way of initializing string does the same implicitly.
*/ 
const city = new String("New York")
console.log(city[0] + city[1] + city[2])
// as string is an object so each character is like key value pair. first character starts with 0 and so on.


// String Method
/*
anchor : ƒ anchor()
at : ƒ at()
big : ƒ big()
blink : ƒ blink()
bold : ƒ bold()
charAt : ƒ charAt()
charCodeAt : ƒ charCodeAt()
codePointAt : ƒ codePointAt()
concat : ƒ concat()
constructor : ƒ String()
endsWith : ƒ endsWith()
fixed : ƒ fixed()
fontcolor : ƒ fontcolor()
fontsize : ƒ fontsize()
includes : ƒ includes()
indexOf : ƒ indexOf()
isWellFormed : ƒ isWellFormed()
italics : ƒ italics()
lastIndexOf : ƒ lastIndexOf()
length : 0
link : ƒ link()
localeCompare : ƒ localeCompare()
match : ƒ match()
matchAll : ƒ matchAll()
normalize : ƒ normalize()
padEnd : ƒ padEnd()
padStart : ƒ padStart()
repeat : ƒ repeat()
replace : ƒ replace()
replaceAll : ƒ replaceAll()
search : ƒ search()
slice : ƒ slice()
small : ƒ small()
split : ƒ split()
startsWith : ƒ startsWith()
strike : ƒ strike()
sub : ƒ sub()
substr : ƒ substr()
substring : ƒ substring()
sup : ƒ sup()
toLocaleLowerCase : ƒ toLocaleLowerCase()
toLocaleUpperCase : ƒ toLocaleUpperCase()
toLowerCase : ƒ toLowerCase()
toString : ƒ toString()
toUpperCase : ƒ toUpperCase()
toWellFormed : ƒ toWellFormed()
trim : ƒ trim()
trimEnd : ƒ trimEnd()
trimLeft : ƒ trimStart()
trimRight : ƒ trimEnd()
trimStart : ƒ trimStart()
valueOf : ƒ valueOf()
Symbol(Symbol.iterator) : ƒ [Symbol.iterator]()
*/

// read about string methods here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// string methods example
console.log(city.length) // 8
console.log(city.toUpperCase()) // NEW YORK
console.log(city.charAt(4)) // Y
console.log(city.indexOf("r")) // 6
const str = city.substring(4, 8) // last indexed value is not included & negative values are not allowed in substring
console.log(str)  // York

const anotherStr = city.slice(-8, 3) // in slice method, negative values are allowed as index & negative index starts from -1 index is like last index in positive values
console.log(anotherStr)  // New

console.log(typeof city) // object
console.log(city) // New York








