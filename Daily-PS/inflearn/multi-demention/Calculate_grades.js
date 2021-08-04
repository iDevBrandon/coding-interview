// my first attempt 
/*
Calculate grades 
Input

10
1 0 1 1 1 0 0 1 1 0

1 0 1 2 3 0 0 1 2 0 => 10 

output : 10

* give kth more if its corrected k times 
*/

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const gradeCount = Number(input[0]);

const arr= input[1];
let tempArr = [];
let result = 0;
let tempResult = 0;

for(let i=0; i<= gradeCount; i++) {
  if((gradeCount[i] +1) === gradeCount[i+1]) {
    tempArr.push()
  }
  result += tempResult;
}

console.log(result)


// after ref

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const gradeCount = Number(input[0]);

const arr= input[1].split(' ').map(n => Number(n));

let answer = 0;
let cnt = 0;

for(let i=0; i<= gradeCount; i++) {
  if(arr[i] === 1) {
    cnt ++;
    answer += cnt
  } else {
    cnt = 0;
    
  }
}

console.log(answer)
