// ================ This and arrow function ==================


// this keyword refers to the curent context.
// this referring to the user object itself.
const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}

// this has default value of hitesh, so we have made it to be modular.
user.welcomeMessage() // hitesh, welcome to the website

user.username = "Naveen"
user.welcomeMessage() // Naveen, welcome to the website

// when this is called outside any object, then it gives following outputs.
// in the above example this is printed because it is inside object. but if this is called inside an alone function then it will print undefined.
console.log(this) // {} ==> empty object in the node environment. & in the chrome browser console, it refers to global object 'window'.

const chai1 = function () {
    let username = "Albert"
    console.log(this.username) // undefined
    console.log(this) // {}
}
function chai2() {
    let username = "Naveen"
    console.log(this.username) // undefined
    console.log(this) // {}
}



// arrow function

const chai3 = () => {
    let username = "Naveen3"
    console.log(this.username) // undefined
    console.log(this) // {}
}

chai3()


const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3,4)) // 7


// implicit return. it is assumend that it is return something and it is used when the function definition is of one line.
// this technique is used in React
// () braces are not mandatory for implicit return function. it is just for rememberance. also () are used when returning object or array.

const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(1,2,3)) // 6

const returnObject = () => ({num : "Three"}) 
console.log(returnObject().num) // Three

