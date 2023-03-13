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

## [1. Problem Solving](https://neetcode.io/roadmap)

<https://fastcampus.co.kr/dev_online_upjscodingtest>

알고리즘 종류별로 하나씩 하루에 5문제씩 계속 풀면 확 늘긴 할건데.. 아니면 하루 2~3문제씩이라도 매일매일

보통 코테 스터디 하시는분들 보면 알고리즘 종류별로 문제 리스트 다 정리한다음에 꾸준히 하시죠. 막 대회나갈정도에 그런 실력까진 아니더라도 코테 기준점은 가는 반타작 이상하는 실력만 가도

## 자료구조

- 배열(Array)과 리스트(List)
- 스택 (Stack)
- 큐 (queue)
- 트리(Tree)와 우선순위 큐(Priority Queue)
- 그래프(Graph)
