const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getMax(array, length) {
  let max = 0;
  for (let i = 0; i < length; i++) {
    if (array[i] >= max) max = array[i];
  }

  return max;
}
