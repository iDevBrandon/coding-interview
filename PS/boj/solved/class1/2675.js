const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = input[0]; // 2
let result = "";

for (let i = 1; i <= num; i++) {
  let row = input[i].split(" ");
  let num = +row[0];
  let text = row[1]; // ABC or /XYZ

  for (let j = 0; j < text.length; j++) {
    result += text.split("")[j].repeat(num);
  }

  console.log(result);
}
