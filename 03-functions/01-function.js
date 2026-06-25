// =========== Functions ========

// Function is like reusable piece of code. It is like clock of code that will be used whenever and wherever need. every function has its own functionality. like getDataFromServer() or printDatatoFrontend() many more.

function sayMyName() {
    console.log("Naveen");
}

sayMyName   // Reference  ==> nothing printed
sayMyName() // Execution   ==> Naveen

// syntax : function functionName(parameter1 parameter2, ....) { definition}
// Remember : After the return statement, no line of code statement will be executed. it ends the execution of function.
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

// when values are passed to function then they are parameters and when function is defined then when we pass variableName, then they are parameters
console.log(addTwoNumbers(2,3)) // 5

// addTwoNumbers(number1, number2) has a problem which is that it assumes that there will be numbers passed to function but sometimes there can be strings, or combo of both, or else. we need to check that does it have our desired input or not using conditionals.
console.log(addTwoNumbers(2, "a"))  // 2a

const result = addTwoNumbers(10, 11);
console.log(result); // 21

function loginUserMsg1(username) {
    if(!username) {
        console.log("Please enter username");
        return
    }
    return `${username} logged in`;
}
console.log(loginUserMsg1("John")) // John logged in

// when no argument is passed, then it wiil return undefined.
console.log(loginUserMsg1()) // undefined logged in

// this function has default value of Naveen. when there is argument passed, then it will print the default value.
function loginUserMsg2(username = "Naveen") {
    return `${username} logged in`;
}


console.log(loginUserMsg2("Casey")) // Casey logged in
console.log(loginUserMsg2())  // Naveen logged in




// ============= Functions with objects and array =============

// function with array
// when we dont know how many arguments will be passed so we use arrays
// we will use rest operator ==> ... ====> rest operator converts arguments to an array
function calculateCartPrice1(...nums) {
    let res = 0;
    for(let i of nums) {
        res += i;
    }
    return res;
}

console.log(calculateCartPrice1(100,200,300,400,500)) // 1500

// in this, first value is stored in num1, second value in num2, and rest of them in nums array
function calculateCartPrice2( num1, num2, ...nums) {
    let res = num1 + num2;
    for(let i of nums) {
        res += i;
    }
    return res;
}

console.log(calculateCartPrice2(100,200,300,400,500, 600)) // 1500


// function with objects

const user = {
    name : "naveen",
    education: "undergraduate"
}

// in this function definition, if there is a single change in key, then it will cause a problem so we need to handle that the key exists.
function handleObject(anyObject) {
    return (`Username is ${anyObject.name} and education is ${anyObject.education}`);
}
    
console.log(handleObject(user))  // Username is naveen and education is undergraduate

console.log(handleObject({
    name: "John Doe",
    education : "Intermediate"
})) // Username is John Doe and education is Intermediate


const newArr = [100, 200, 300, 400, 5, 60]

function returnAnyValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(returnAnyValue(newArr)); // random array value
