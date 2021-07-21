# Basic input and output of JavaScript(Node.js)

## realine module

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

## fs module

// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
// let num = line.split(' ').map(Number); for one line

input.push(line.trim());
// rl.close();
}).on("close", function () {
const length = parseInt(input[0]);
const values = input[1].split(" ").map(Number);
console.log(`your length is ${length} & your arr is ${values}`);
process.exit();
});

## 2021/04/30

leetcode, BOJ,

|                                Number                                 |              Title              |   Result    |
| :-------------------------------------------------------------------: | :-----------------------------: | :---------: |
|             [2750](https://www.acmicpc.net/problem/2750)              |          Sort numbers           | success |
| [121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | best-time-to-buy-and-sell-stock | Failed  |
