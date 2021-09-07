function solution(s) {
  let answer = "YES";
  let stack = [];

  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) answer = "NO";
      else {
        stack.pop();
      }
    }
  }
  return answer;
}

let input = "(())";
console.log(solution(input));
