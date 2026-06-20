// ========== Object - 03 ============
// Object de-structure and JSON API intro

const course = {
    courseName : "JS Course",
    price : "1999",
    courseInstructor : "Naveen",
}

/*
// instead of doig this again and again, we will destructure the object
console.log(course.courseName)
console.log(course.price)
console.log(course.courseInstructor)
*/

// object de-structuring
const {courseName : name, price, courseInstructor : instructor} = course;
// console.log(courseName) // this will gve error, because we have given the name to courseName
console.log(name)
console.log(price)
console.log(instructor)


// there is another concept of array destrcturing as well, we will discuss it later

// --------- APIs ---------
/*

// this is JSON, This is how data comes from backend when API is called. data comes from backend in this JSON format. it does not have any name. JSON data comes, we convert it to objects and we use it. ==> in JSON format, key and value are both strings
{
    "name" : "Naveen",
    "education" : "Undergraduate",
    "field" : "Computer Science"
}


// and sometimes we get an array API objects. example give below:
[
    {},
    {},
    {}
]

// example of API : https://randomuser.me/api/     ===> paste in new tab

*/