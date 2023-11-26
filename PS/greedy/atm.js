// ATM
// https://www.acmicpc.net/problem/11399

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answer = 0;
const ppl = input[0];
const arr = input[1].split(" ");

const sorted = arr.sort((a, b) => a - b).map((x) => +x);

const temp = [];
let sum = 0;

for (let i = 0; i < sorted.length; i++) {
  sum += sorted[i];
  temp.push(sum);
}

for (let i = 0; i < temp.length; i++) {
  answer += temp[i];
}

console.log(answer);
