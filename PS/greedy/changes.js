// JavaScript를 이용해 문자열을 출력할 수 있어야 한다.
// console.log() 함수를 이용해 원하는 변수 혹은 상수를 출력할 수 있다.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input[0].split(" ")[0];
let k = input[0].split(" ")[1];
const coins = [];
let answer = 0;

// insert from input[1]~input[input.length-1]

for (let i = 1; i < input.length; i++) {
  coins.push(input[i]);
}

console.log(coins);

coins.sort((a, b) => b - a);

for (let j = 0; j < coins.length; j++) {
  if (k / coins[j] < 0) {
    j++;
  } else {
    answer += Math.floor(k / coins[j]);
    k = k % coins[j];
  }
}

console.log(answer);
