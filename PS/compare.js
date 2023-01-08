const fs = require("fs");

const readFileSyncAddress = "input.txt";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

// 예제 문자열로 배열에 집어 넣음
const [n, k] = input[0].split(" ");

//문제풀이
function solution(n, k) {
  const queue = [];
  const answer = [];
  // 포문돌려서 queue에 쌓는다. 우리가 아는 큐가 아니라 배열 이름이 queue임.
  for (let i = 0; i < n; i += 1) queue.push(i + 1);

  let count = 1;
  while (queue.length) {
    // queue의 맨 앞부터 꺼낸다.(배열의 크기가 0될때까지)
    const shiftItem = queue.shift();
    if (count % k === 0) {
      // k번째라면 answer 배열에 push
      answer.push(shiftItem);
    } else {
      // 아니면 queue에 push.
      queue.push(shiftItem);
    }
    count += 1;
  }
  console.log(`<${answer.join(", ")}>`);
}

// 제출
solution(n, k);
