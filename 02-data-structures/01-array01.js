// Array

// in JS, arrays can contain different types of data at once
// const data = [0, 1, 2, 3, 4, 5, 6, true, "Naveen"]

// Array is an object. In JS, arrays are resizable meaning they are resizable
const myArr = [1, 2, 3, 4, 5, 6]

console.log(myArr[3]) // 4  ==> array element accessing
// In JS, all built-in-copy operations with any javascript objects create shallow copies
// Shallow copy share the same references meaning they point to same address in memory.
// Deep copy do not share the same references meaning they do not point to same address in memory.

// array Declaration Methods
const heroes = ["Captain-America", "IronMan", "Shaktimaan"]
console.log(typeof heroes)  // object
const numbers = new Array(1,2,3,4,5);
console.log(typeof numbers)  // object
console.log(numbers[3])  // 4



// Array Methods

const arrNums = [1,2,3,4,5]

arrNums.push(10);
arrNums.push(20);

console.log(arrNums[5]) // 2nd last Index value = 10 which is recently pushed
console.log(arrNums.at(-1)) // 20
arrNums.pop() // last element 20 is removed
console.log(arrNums.at(-1)) // 10

arrNums.unshift(0)
arrNums.unshift(-1)
console.log(arrNums[0]) // -1
arrNums.shift()  // removes first element
console.log(arrNums[0]) // 0

// There are some questionaire methods which answer in true/false ==> boolean value
// Does arrNums include 9?
console.log(arrNums.includes(10)) // true = Yes
// what is the index of value 10?
console.log(arrNums.indexOf(10)) // 6


const newArrNums = arrNums.join()  // converts all elements of array to a single string
console.log(newArrNums)         // 0,1,2,3,4,5,10
console.log(typeof newArrNums)  // string


// slice and splice
// Slice does not include last element in the range and splice include last element in the range. Splice removes the elements of the given range from the original array. Splice manipulates original array.

console.log("A ", arrNums);  // A  [0, 1,  2, 3, 4, 5, 10]


const subArr1 = arrNums.slice(1, 3)
console.log(subArr1)  // [ 1, 2 ]
console.log("B ", arrNums)  //  B  [0, 1,  2, 3, 4, 5, 10]

const subArr2 = arrNums.splice(1, 3) 
console.log(subArr2)  // [ 1, 2, 3 ]
console.log("C ", arrNums)  // C  [ 0, 4, 5, 10 ]








// Read about Array methods here :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array












// Tip : First make it work as required, then think of optimizing it