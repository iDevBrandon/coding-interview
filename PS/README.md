# 💻 Algorithm Coding Test

## DBA study resources

## Basic input and output of JavaScript(Node.js)

## realine module

sometimes, remove trim()

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

repli 실행할땐 백준 테스트를 위해서 Ctrl + d 제출

## fs module

Run by Node.js

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

## Big O Notation

Iterating over a collection Or using N as a pointer with a for loop => O(N)
Iterating over the same collection with nested for loops => O(N^2)
Iterating over different collection with nested for loops => O(N \* M)

## Space complexity VS. Time complexity

Space complexity: How much more memory use(RAM) do we need as the inputs provided to the code gets larger?
Time complexity: How much runtime(more time) do we need to execute the code as the inputs provided to the code gets larger?

## Logarithmic time complexity

If the input is doubled, then we only have to do one more operation.
