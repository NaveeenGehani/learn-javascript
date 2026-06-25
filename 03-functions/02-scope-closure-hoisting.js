// Global and Local Scope

var a = 10;
let b = 20;
const c = 30;

console.log(a)
console.log(b)
console.log(c)

// in the above code, there is are varaibles decalred with three difeerent keywords. but what was the need to define three different keywords. the reason for that is  that when these varables are declared inside the block of code. if they are declared inside {} then how wll they work.

{
    var num1 = 100
    let num2 = 200
    const num3 = 300
}

console.log(num1)  // 100
// console.log(num2)  // error
// console.log(num3)  // error

// var declared variables are accessible outside and inside the {} or block of code.

// variable declared with var is accessible outside the braces {} but the variables declared with let and const are not. why? because they are scope based variables. what does it mean is that if variables declared with let and const are declared inside the any function, or any other block of code are accessible only inside that block of code. that is called local scope. if they are declared outside any block of code or {}, then it is called global scope. var is global scope and let and const are local scope variables. meaning they have a range in whic they are accessible.

var x1 = 1000
x2 = 3000
{
    var x1 = 9000
    x2 = 7000
}

console.log(x1) // 9000 ==> here 9000 is printed because it is global scpe variable. it will affect the changes whether it is changed inside (locally) the block of code outside (globally).
console.log(x2) // 7000 ==> same problem like var is with the variables which are declared without ay keyword.
let y = 8000
{
    let y = 4000
    console.log("inside {} : " + y) // 4000
}

console.log("outside {} : " + y) // 8000


// local scope also known as block scope
// global scope

// Note : scope of variables on chrome console and node code environment is different.


// ============== Nested scope ================

function one() {
    const firstName = "Naveen";
    
    function two() {
        const lastName = "Kumar"
        console.log(firstName)
    }
    // console.log(lastName) // error ==> bcz out of scope variable
    two()
}

one() // first one() is executed, and then two() is executed.

// Child function can access parent variables ==> child block of code can access parent block of code variables.
// this is also known as closure.
// Closure definition : A closure is a feature in JavaScript where an inner function retains access to the variables of its outer (enclosing) function, even after the outer function has finished executing.
// read about closure here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures



// this concept is known as Hoisting

// ++++++++++ Hoisting ++++++++++

// read about hoisting here : https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

console.log(addone(7)) // 8

function addone(num) {
    return num + 1;
}
console.log(addone(6)) // 7


// console.log(addTwo(8)) // error bcz Cannot access 'addTwo' before initialization
// sometimes it is called expression.
const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(9)) // 11


