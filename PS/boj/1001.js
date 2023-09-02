const fs = require("fs");

const readFileSyncAddress = "/dev/stdin";
let input = fs.readFileSync(readFileSyncAddress).toString().split(" ");

const first = parseInt(input[0]);
const second = parseInt(input[1]);

console.log(first - second);
