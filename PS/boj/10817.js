const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let big = input[0];
// for(let i=0; i<input.length; i++) {
//   if(input[0] >= input[1]) {
//     big = input[0]
//   } else {
//     big = input[1]
//   }
// }

input.sort((a, b) => a - b);

console.log(input[1]);