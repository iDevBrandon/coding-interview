function solution(s) {
  let answer = "YES";
  let stack = [];

  //   for (let x of s) {
  //     if (x === "(") {
  //       stack.push(x);
  //     } else {
  //       if (stack.length === 0) answer = "NO";
  //       else {
  //         stack.pop();
  //       }
  //     }
  //   }

  s.split("").forEach((x) => stack.push(x));

  for (let i = 0; i <= stack.length; i++) {
    if (stack[i] === "(") {
      stack.pop();
    } else {
      stack.pop();
      if (stack.length === 0) {
        return "NO";
      }
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

let input = "((())";
console.log(solution(input));
