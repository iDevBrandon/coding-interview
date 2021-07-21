const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

let sum = a * b * c;
const arrLength = sum.toString().length; // abc length

const arr = Array.from(sum.toString()).map(Number); // [1, 7, 0, 3, 7, 3, 0, 0]
let count = 0;
let current = null;

arr.map();
