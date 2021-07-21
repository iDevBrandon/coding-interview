const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]); //5
const arr = [];

for (let i = 1; i <= num; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => a - b);

arr.forEach(function (el) {
  console.log(el);
});
