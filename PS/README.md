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

### 자료구조

- 배열(Array)과 리스트(List)
- 스택 (Stack)
- 큐 (queue)
- 트리(Tree)와 우선순위 큐(Priority Queue)
- 그래프(Graph)

배열은 메모리의 연속 공간에 값이 채워져 있는 형태의 자료구조. 인덱스를 통해 참조할수 있음.

리스트는 값과 포인터를 묶은 노드라는것을 포인터로 연결한 자료구조입니다.

[숫자의 합](https://www.acmicpc.net/problem/11720)

### 정렬(Sorting) 알고리즘

- 선택 정렬
- 버블 정렬
- 삽입 정렬
- 병합 정렬

### 탐욕법(greedy)

### 이진 탐색 알고리즘

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
