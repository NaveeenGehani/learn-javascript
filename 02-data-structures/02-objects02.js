// =================== Objects - 02 ===================

const myAppUser = new Object();

// console.log(myAppUser myAppUser) // {}

myAppUser.id = "101"
myAppUser.name = "Naveen Kumar"
myAppUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullName : {
            firstname : "Naveen",
            lastname : "Kumar"
        }
    }
}

console.log(regularUser.fullName?.userFullName.firstname) // due to ?, it will only work if it exists otherwise does not.
console.log(regularUser.fullname.userFullName.firstname)


// ---------- object merging ----------
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

// const obj4 = {obj1, obj2}


// Object.assign(target, source)
const obj5 = Object.assign(obj1, obj2, obj3) // obj1 = source and obj2,ob3 = target 
console.log(obj5)

const obj6 = Object.assign({}, obj1, obj2, obj3) // here empty object is target and other are sources
console.log(obj6)

const obj7 = {... obj1, ...obj2, ...obj3}
console.log(obj7)


// access objects as array elements

const users = [
    {
        id : "1"
    },
    {
        id : "2"
    },
    {
        id : "3"
    }
]

console.log(users[1].id)



// find object keys ==> keys in Object
console.log(Object.keys(obj7))  // [ '1', '2', '3', '4', '5', '6' ]

// find object values ==> values of keys in Object
console.log(Object.values(obj7))  // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// get an array of arrays of key value pairs
console.log(Object.entries(obj7))
// output : [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ], [ '5', 'e' ], [ '6', 'f' ] ]


// does obj7 has property "1" ? returns true or false
console.log(obj7.hasOwnProperty("1")) // true



// read about object methods here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


