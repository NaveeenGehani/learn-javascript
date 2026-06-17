// Stack and Heap memory in JS

// Stack {Primitive}, Heap {Non-Primitive}
// Note : 
// For Primitive types, you get a copy and manipulation is done on copies, original remains as it is.
// For Non-Primitive, you get a reference to the original, any manipulation done on that, is reflected on the original.

let myName = "Naveen Kumar Gehani"
let anotherName = myName

anotherName = "John Doe"
console.log(myName)       // Naveen Kumar Gehani
console.log(anotherName)  // John Doe


let user1 = {
    email : "naveen@javascript.com",
    education : "Undergraduate"
}

let user2 = user1;

user2.email = "John@Doe.com"
console.log(user1.email)  // John@Doe.com
console.log(user2.email)  // John@Doe.com

