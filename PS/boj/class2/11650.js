// other's
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// For local test
// const input = ["7", "1 -1", "3 3", "1 -2", "1 1", "3 -2", "-2 1", "-3 1"];
const N = input.shift();
const coordsArr = input.map((coords) =>
  coords.split(" ").map((nums) => parseInt(nums))
);

let results = "";
coordsArr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .forEach((coords) => {
    results += `${coords[0]} ${coords[1]}\n`;
  });

console.log(results);

////////////////////////////////////////////////////
// Mine

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const inputLeng = Number(input[0]); //5
let N = input.shift();
const coordsArr = input.map((coords) =>
  coords.split(" ").map((num) => parseInt(num))
);

let answer = "";
// // result[i][0] in order
let range = coordsArr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .forEach((coords) => {
    answer += `${coords[0]} ${coords[1]}\n`;
  });

console.log(answer);
