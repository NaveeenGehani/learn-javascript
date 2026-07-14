// Control Structure is like a control on code blocks. like when a block of code should run and when not.

// if
// if (condition) {
    // block of code 
// }






const userEmail = "naveen@gmail.com"

if(userEmail) {
    console.log("Got The User Email")
} else {
    console.log("Dont Got User Email")
}



// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Everything else is truthy values
// Truthy Values
// true, "0", "false", " ", [], {}, function(){}


// console.log(false == 0)  // true
// console.log(false == '') // true
// consoe.log(0 == '')  // true



const email = [];
if(email.length === 0) {
    console.log("Array is Empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty")
}


// this operator for 
// Nullish Coalescing Operator (??) : null, undefined

let val1;
val1 = 5 ?? 10;
console.log(val1)
val1 = null ?? 988;
console.log(val1)
val1 = 89 ?? undefined;
console.log(val1)
val1 = null ?? undefined
console.log(val1)
val1 = undefined ?? null;
console.log(val1)
val1 = undefined ?? 848 ?? null ?? 8392
console.log(val1)


// ternary Operator is a short version of if-else
const price = 100;
price <= 80 ? console.log("less than 80") : console.log("More than 80")