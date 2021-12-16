// 2, the smallest num
// 8, the next one

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => Number(el));

// input = input.map((el) => Number(el))

const total = 30;
let students = [];
let answer = [];

input.sort((a, b) => a - b);

for (let i = 1; i <= total; i++) {
  students.push(i);
}

students.forEach((e) => {
  if (!input.includes(e)) {
    console.log(e);
  }
});
