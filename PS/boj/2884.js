// 10 10 -> 9 25
// 0 30 -> 23 45
// 23 40 -> 22 55

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let hour = Number(input[0]);
let min = Number(input[1]);

if (min - 45 < 0) {
  min = 60 - Math.abs(min - 45);
  hour - 1;

  if (hour === -1) {
    hour = 23;
  }
} else {
  min -= 45;
}

console.log(hour + " " + min);
