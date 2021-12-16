# Basic input and output of JavaScript(Node.js)

## realine module

sometimes, remove trim()

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

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

### study order

#### Stack & Queue

Stack - Last in Last Out (LIFO)
Queue - First in First Out (FIFO)
<https://www.youtube.com/watch?v=1AJ4ldcH2t4>

### free resources

[Nick White YT channel](https://www.youtube.com/channel/UC1fLEeYICmo3O9cUsqIi7HA)
[Neetcode YT channel](https://www.youtube.com/channel/UC_mYaQAE6-71rjSN6CeCA-g)

## 자주나오는 유형

완전 탐색(BFS, DFS, 이분 탐색 등)
동적 계획법(DP)
문자열 처리
트리, 그래프
그리디 알고리즘
브루트 포스

## Big O Notation

Iterating over a collection Or using N as a pointer with a for loop => O(N)
Iterating over the same collection with nested for loops => O(N^2)
Iterating over different collection with nested for loops => O(N \* M)

## Space complexity VS. Time complexity

Space complexity: How much more memory use(RAM) do we need as the inputs provided to the code gets larger?
Time complexity: How much runtime(more time) do we need to execute the code as the inputs provided to the code gets larger?

## Logarithmic time complexity

If the input is doubled, then we only have to do one more operation.
