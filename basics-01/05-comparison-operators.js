// ---- Comparison operators ----

// greater than 
console.log(2 > 3)  // false
// greater than or equal to
console.log(2 >= 2) // true
// less than
console.log(2 < 3)  // true
// less than or equal to
console.log(3 <= 3)  // true
// equal to & it checks only values not the data type
console.log(3 == 3)  // true
// not equal to
console.log(3 != 3)  // false


console.log("2" > 1);  // true
console.log("02" > 1); // true



/*
// try to avoid these kind of comparisons
console.log(null > 0)  // false
console.log(null == 0) // false
console.log(null >= 0) // true

// The reason is that equality check == and comparisons > < >= >/ work differently
// Comparisons covert null to a number treating it as 0. that is why { (3) (null >= 0) } is true and { (1) (null > 0) } is false. 


console.log(undefined == 0) // false
console.log(undefined >= 0) // false
console.log(undefined > 0)  // false
console.log(undefined <= 0) // false
console.log(undefined < 0)  // false
*/


// === strict check & it checks both the value and the data type
console.log("2" === 2)  // false
console.log(2 === 2)    // true
