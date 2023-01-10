// const readFileSyncAddress = "/dev/stdin";
// let input = require("fs")
//   .readFileSync(readFileSyncAddress)
//   .toString()
//   .split(" ");

function mySolution(first, second) {
  let answer = [];
  let n = first.length; // 3
  let m = second.length; // 5
  let p1 = (p2 = 0); // 콤마로만 처리가 안됨. (= 이렇게 넣어줘야함. p1,p2=0 하면안됨!!!)

  // 둘중에서 하나라도 false가 되면 while문 종료
  while (p1 < n && p2 < m) {
    if (first[p1] <= second[p2]) {
      answer.push(first[p1]);
      p1++;
    } else {
      answer.push(second[p2]);
      p2++;
    }
  }

  // 남은 elements 처리
  while (p1 < n) answer.push(first[p1++]);
  while (p2 < m) answer.push(second[p2++]);

  console.log(answer);
}

mySolution([1, 3, 5], [2, 3, 6, 7, 9]);

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
// console.log(solution(a, b));
