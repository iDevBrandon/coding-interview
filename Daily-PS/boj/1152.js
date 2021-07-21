// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

function countStr(input) {
  // list up the str with array
  let str = input.trim().split(" ");

  // return the number of array
  return str.length;
}

countStr("The Curious Case of Benjamin Button");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let wordsArr = input.trim().split(" ");
let countofWords = 0;

for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i] !== "") {
    countofWords++;
  }
}

console.log(countofWords);