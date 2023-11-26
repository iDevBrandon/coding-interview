const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = 0;
let groups = input[0].split("-");

for (let i = 0; i < groups.length; i++) {
  let cur = groups[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);

  if (i == 0) answer += cur;
  else answer -= cur;
}

console.log(answer);
