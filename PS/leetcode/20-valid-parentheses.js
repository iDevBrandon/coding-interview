// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// Stack is LIFO

// Input: s = "()[]{}"

// Output: true

function isValid(s) {
  let stack = [];
  let answer = false;

  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    }

    if (x === "{") {
      stack.push(x);
    }

    if (x === "[") {
      stack.push(x);
    }
  }

  console.log(stack);
}

isValid("()[]{}");

// reference
// https://www.youtube.com/watch?v=QuFPIZj55hU&ab_channel=beiatrix
