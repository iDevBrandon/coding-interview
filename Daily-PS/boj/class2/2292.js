const input = require("fs").readFileSync("/dev/stdin").toString();

let count = 1;
let max = 1;

// set the range

while (max < input) {
  max += count * 6;
  count++;
}

console.log(count);

// prevNum + count * 6
// 1  so +6 every loop!
// 2 - 7, 5
// 8 - 19, 11
// 20 - 37, 17
// 38 - 61, 23
