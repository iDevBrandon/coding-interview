# JS Array

let array1 = [1,2,3,4];
// insert
.push()

// remove
.pop() or shift()

// access
let array1 = [1,2,3,4]
array1[2];

for ( in ) -> index, call one by one

let array1 = ['all', 'cows' 'are', 'big'];

for(let i in array1) {
console.log(i); // 0,1,2,3
}

for(let i index in array1) {
console.log(array1[index]) // all, cows, are, big
}

for ( of ) -> value of array

for(let i of array1) {
console.log(i); // all, cow, are, big
}

let array1 = ['all', 'cows', 'are', 'big'];

array1.forEach(function(element, index) {
console.log(element);
})

helper functions like

## 1 slice

.slice(begin, end)
let array1 = [1,2,3,4];
array1.slice(1,2); //[2]
array1.slice(2,4); // [3,4];

## 2 .splice(begin, size, element1)

let array1 = [1,2,3,4];
array1.splice(1,2) // array1 = [1,4];

3..concat() - add the array in the end and return that array
let array1 = [1,2,3,4];
array1.concat(); // [1,2,3,4], array1 = [1,2,3,4];
array1.concat([2,3,4]); // [1,2,3,4,2,3,4]

function addFourNums(a,b,c,d) {
return a+b+c+d;
}

let numbers = [1,2,3,4];
console.log(addFourNums(...numbers)); // 10
