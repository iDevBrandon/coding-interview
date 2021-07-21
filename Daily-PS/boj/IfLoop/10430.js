const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]);

if (num1 > num2) {
  console.log(">");
} else if (num1 < num2) {
  console.log("<");
} else {
  console.log("==");
}
