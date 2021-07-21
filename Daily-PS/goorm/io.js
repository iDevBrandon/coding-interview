// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line.trim());
  // rl.close();
}).on("close", function () {
  const length = parseInt(input[0]);
  const values = input[1].split(" ").map(Number);
  console.log(`your length is ${length} & your arr is ${values}`);
  process.exit();
});
