
/*
8 
130 135 148 140 145 150 150 153
*/

// output : 5


const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


const numStudents = Number(input[0]); // 8

const arr = input[1]; // [130 135 148 140 145 150 150 153]

let count = 0;
let tempMax = arr[0]; // 130 atm

for(let i=1; i< arr.length; i++) {
  if(arr[i] > tempMax) {
    count++
    tempMax = arr[i];
  }
}

console.log(count)
