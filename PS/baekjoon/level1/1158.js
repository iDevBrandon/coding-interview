/**
 *요세푸스 문제

 input 7 3 

 output <3,6,2,7,5,1,4>
 */

// const fs = require("fs");
// let input = fs.readFileSync(filePath).toString().split("");

function mySolution(n, k) {
  let temp = [];
  let answer = [];

  for (let i = 1; i <= n; i++) {
    temp.push(i);
  }

  // k번째 숫자를 계속 골라내고 push
  while (temp.length > 0) {
    for (let j = 0; j < temp.length; j += 3) {
      answer.push(temp[j]);
      temp.splice(temp.indexOf(temp[j]), 1);
    }
    break;
  }

  console.log(answer);
}

mySolution(7, 3);
