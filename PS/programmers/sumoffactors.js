function solution(n) {
  var answer = 0;
  let temp = [];

  // 약수 구하고
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      temp.push(i);
    }
  }

  // 합치고
  for (let i = 0; i < temp.length; i++) {
    answer += temp[i];
  }

  return answer;
}
