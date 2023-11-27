# 💻 Algorithm Coding Test - this drive me crazy

## Basic input and output of JavaScript(Node.js)

repli 실행할땐 백준 테스트를 위해서 Ctrl + d 제출

## realine module

```js
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
```

## fs module - Run by Node.js

```js
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
```

---

## 백준 문제 추천

### 배열(Array)

### 스택 (Stack)

[스택](https://www.acmicpc.net/problem/10828)

### 큐 (queue)

### 트리(Tree)

### 맵(Map)

### 해시(Hash)

### 그래프(Graph)

### 정렬(Sorting) 알고리즘

### 탐욕법(greedy)

### 이진탐색 알고리즘

[수 찾기](https://www.acmicpc.net/problem/1920)

### 백트레킹

### DFS:깊은 우선 탐색 알고리즘

### BFS 알고리즘

### DP(다이나믹 프로그래밍)

### 최단 경로

### 투 포인터 알고리즘

### 누적합 알고리즘

---

## DBA study resources

<https://neetcode.io/roadmap>

<https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/>

<https://fastcampus.co.kr/dev_online_upjscodingtest>

<https://www.inflearn.com/course/%EB%91%90%EC%9E%87-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%8C%8C%EC%9D%B4%EC%8D%AC/dashboard>

<https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/dashboard>

문제 리스트
<https://covenant.tistory.com/224>
