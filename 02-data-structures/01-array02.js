// ============ Array Part 2 ===============

const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Flash", "Superman", "Batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes)   // [ 'Thor', 'Ironman', 'Spiderman', [ 'Flash', 'Superman', 'Batman' ] ]
//  here in marvel_heroes, array of dc_heroes is pushed. it is problem because you will not know when there is another array or string.
// so we need to push dc_heroes in marvel_heroes in a way, that pushes elements of dc_heroes in marvel_heroes.

// concat() returns the final merged array
const all_heroes_1 = marvel_heroes.concat(dc_heroes)
console.log(all_heroes_1);  // [ 'Thor', 'Ironman', 'Spiderman', 'Flash', 'Superman', 'Batman' ]  ==> array merging

// spread operator ==> [...arrayName1, ...arrayName2]  == is another way to merge arrays
const all_heroes_2 = [... marvel_heroes, ... dc_heroes]
console.log(all_heroes_2) // [ 'Thor', 'Ironman', 'Spiderman', 'Flash', 'Superman', 'Batman' ]

// this is not readable so we use another method to flatten it into a linear array .flat()
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12] ], 13, 14, 15]

// array.flat() ==> here there is argument that needs to be pass which is for depth i mean how deep are the arrays. or we can pas Infinity which will figure it out itself
const correct_array =  another_array.flat(Infinity)
console.log(correct_array)  // [1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15 ]


// is the given input array?
console.log(Array.isArray("Naveen"))  // false = No

console.log(Array.from("Naveen Kumar")) // this converts the given input into array

console.log(Array.from({
    firstName : "Naveen",
    lastName : "Kumar"
})) // interesting ====> this will give an empty array as it is not defined whether to make array of keys or values of keys



let score1 = 100
let score2 = 150
let score3 = 400

// of() method returns an array of given set of elements
console.log(Array.of(score1, score2, score3))