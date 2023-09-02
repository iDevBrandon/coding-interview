const fs = require("fs");

// 백준 제출시, 주석 제거
const readFileSyncAddress = "/dev/stdin";
let input = fs.readFileSync(readFileSyncAddress).toString();

const txt = "강한친구 대한육군";

// add ln for next line
for (let i = 0; i < 1; i++) {
  console.log(txt[i]);
}
