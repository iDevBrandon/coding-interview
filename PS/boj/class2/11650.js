// other's
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// For local test

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

let N = input.shift();
const coordsArr = input.map((coords) =>
  coords.split(" ").map((num) => parseInt(num))
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
