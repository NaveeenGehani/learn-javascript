// Primitive or call by value type

// call by value eans you get a copy copy of that data ad any kind of manipulation is applied to only those copies

// 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt
// null means empty. menas there is no value
// undefined means variable is declared ad memory space is reserved but there is no value assigned.
// BigInt means very big value. like trillion or billion.
// Symbol is used in React

const name = "Naveen";
console.log(typeof name) // string

const score = 100
console.log(typeof score) // number
const scoreValue = 100.34
console.log(typeof scoreValue) // number

const isLoggedIn = false
console.log(typeof isLoggedIn) // boolean

const outsideTemp = null
console.log(typeof outsideTemp) // object

let userEmail;  // undefined by dafult when declared
console.log(typeof userEmail) // undefined

const id = Symbol('123')
console.log(typeof id) // symbol
const anotherId = Symbol('123')
console.log(typeof anotherId) // symbol

console.log(id)
console.log(anotherId)
console.log(id === anotherId) // false

const bigNumber = 23523527237283827253n  // BigInt & putting n at the end makes it bigInt
console.log(bigNumber)
console.log(typeof bigNumber)


// ----------------------------




// Non Primitive or Reference type

// Array, Objects, Functions.

const heroes = ["IronMan", "Captain america", "Ant-Man"];

let myObj = {
    name: "Hitesh",
    age:22
}

const myFunction = function() {
    console.log("Hello, World!");
}

console.log(typeof heroes)     // object
console.log(typeof myObj)      // object
console.log(typeof myFunction) // function || function object


/*
// is JavaScript statically typed or dynamically typed?
JavaScript is dynamically typed, meaning variable types are checked at runtime rather than during compilation. In JavaScript, you do not need to explicitly declare the data type of a variable, and a single variable can hold different types of values (e.g., a number, then a string) throughout the execution of a program
*/