let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let v = Number(input[2]);

let oneDay = b - a; // 4
let temp = 0;

for (let i = 0; i <= v; i++) {
  let day = i * oneDay;

  temp += day;

  if (temp >= v) {
    console.log(i);
    break;
  }
}

/**
 * https://www.acmicpc.net/problem/2869
 *
 * A,B,V 가 있는데
 * V = target height
 *
 * A = rise daytime
 *
 * B = Fall at night
 */
