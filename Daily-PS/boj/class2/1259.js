const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  isPalindrome(input[i]);
}

const isPalindrome = (str) => {
  str = str.replace(/[\W_]/g, "");

  let reversed = str.split("").reverse().join("");
  if (reversed === str) {
    console.log("yes");
  } else {
    console.log("no");
  }
};
