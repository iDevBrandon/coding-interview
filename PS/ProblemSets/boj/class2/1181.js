const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const count = Number(input[0]); // 13

// 1. shortest word.length
// 2. If the length is the same, in alphabetical order

// sort() ?

let newArr = [];

// insert all elements in array
let shortest = input[1].length; // just initial value
for (let i = 1; i <= count; i++) {
  newArr.push(input[i]);
}

// remove duplicated elements in array
let removedArr = newArr.filter((item, index) => newArr.indexOf(item) === index);

removedArr.sort((a, b) => {
  return a.length - b.length || a.localeCompare(b);

  //|| a.localeCompare(b);
});

console.log(removedArr.join("\n"));
