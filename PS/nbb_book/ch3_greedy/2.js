/**
5 8 3
2 4 5 4 6

**/

// 5 is the arr length
// 8 is the number of elments that should be added
// 3 is the maxiumum number of elements that can be added

// 6 + 6 + 6 + 5 + 6 + 6 + 6 + 5 = 46

/*
Calculate grades 
Input

5 8 3
2 4 5 4 6

*/
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = input[0][0]; // arr length
let m = input[0][1]; // times to add up
let k = input[0][2]; // max times

// let arr = input[1].sort();
let arr = input[1].split(" ").map((el) => Number(el));
let result = 0;

let first = arr[n - 1];
let second = arr[n - 2];

for (let i in arr) {
  if (m === 0) break;
  result += first;
  console.log(result);
  m -= 1;
  if (m === 0) break;
  result += second;
  // console.log(result)
  m -= 1;
}

console.log(result);
