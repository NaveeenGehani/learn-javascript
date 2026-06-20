// ======== Objects - 01 ============

// Two ways to declare objects : Literal and contructor

// singleton : when some object is created through constructor, then it is singleton
// Non singleton : When some obect is created through literal way, then it is non-singleton

// contructor method
// Object.create();

// ---- object literals ----
// in objects, we can define our own keys for values. Key can be number, string, characters, etc. it can be mix of datatypes

const education = Symbol("College")

const jsUser = {
    firstName: "Naveen",
    lastName : "Kumar",
    "fullName" : "Naveen Kumar",
    [education] : "University", // syntax : symbol to access value in object
    city : "Karachi",
    email : "naveen@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday", "Sunday"]
};

// two ways to access object values
console.log(jsUser.firstName + " " + jsUser.lastName);  // way 1
console.log(jsUser["firstName"] + " " + jsUser["lastName"]); // way 2
console.log(jsUser.fullName);
console.log(jsUser["fullName"]);
console.log(jsUser[education]);

// override object values
console.log(jsUser.email)
jsUser["email"] = "naveen@openAi.com"
console.log(jsUser.email)

/*
// prevent changes in object values
Object.freeze(jsUser) 
jsUser.isLoggedIn = true   // value is still false, not changed
console.log(jsUser.isLoggedIn)  // false
*/

jsUser.greeting = function() {
    console.log(`Hello, ${this.firstName}`)
}

jsUser.greeting()
console.log(jsUser.greeting)  // returns function reference = [Function (anonymous)]






