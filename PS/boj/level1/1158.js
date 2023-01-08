const readFileSyncAddress = "/dev/stdin";
let input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split(" ");

function mySolution(n, k) {
  let temp = [];
  let answer = [];

  for (let i = 1; i <= n; i++) temp.push(i);

  // k번째 숫자를 계속 골라내고 push
  let count = 1;
  while (temp.length > 0) {
    const shiftItem = temp.shift();
    if (count % k === 0) {
      answer.push(shiftItem);
    } else {
      temp.push(shiftItem);
    }

    count++;
  }

  console.log(`<${answer}>`);
}

mySolution(input[0], input[1]);

// mySolution(7, 3);

/**
 *요세푸스 문제

 input 7 3 

 output <3, 6, 2, 7, 5, 1, 4>


 tips :
 queue를 활용을 하는데, 
 while문을 활용하여, 배열이 0이 될때까지 shift()를 통해서 빼준다.
 */
