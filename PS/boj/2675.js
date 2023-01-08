let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let count = Number(input[0]);

if (input[1] === "") return;

const newArr = input[1].split(""); // [a,b,c]

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i].repeat(count));
}

///////////////////////////////////////////////////////////////////////////////////////////
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  const row = input[i].split(" ");

  const result = row[1]
    .split("")
    .map((v) => v.repeat(count))
    .join("");

  console.log(result);
}
