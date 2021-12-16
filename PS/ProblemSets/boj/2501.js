const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let n = +input[0];
let k = +input[1];
let j = 0;

for (let i = 0; i < n + 1; i++) {
  if (n % i === 0) {
    j++;

    if (j == k) {
      console.log(i);
      break;
    }
  }
}

if (k > j) console.log(0);
