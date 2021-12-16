let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const stack = [];
const count = Number(input[0]);

for (let i = 1; i < count; i++) {
  const command = input[i].split(" ");

  if (command.length === 1) {
    if (command[0] === "pop") {
      if (stack.length === 0) {
        console.log(-1);
      } else {
        stack.pop();
      }
    }

    // size(=length)
    if (command[0] === "size") {
      console.log(stack.length);
    }

    // empty
    if (command[0] === "empty") {
      if (stack.length === 0) {
        console.log(1);
      } else {
        console.log(0);
      }
    }
    // top(=peek)
    // return the top in the stack
    // return -1 if there's no num in stack
    if (command[0] === "top") {
      if (stack.length === 0) {
        console.log(-1);
      } else {
        console.log(stack[stack.length - 1]);
      }
    }
  } else {
    // pop
    //  return remove top element in stack
    // return -1 if there's no number in stack
    // push
    if (command[0] === "push") {
      stack.push(command[1]);
    }
  }
}
