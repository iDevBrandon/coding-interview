// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

//let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let input = [150, 266, 427];
let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum *= +input[i]; //

  let numArr = sum.split("").map((n) => n);

  numArr.forEach(function (num) {
    console.log(num);
  });
}

for (let i = 0; i < 3; i++) {
  multiply *= Number(input[i]);
}
