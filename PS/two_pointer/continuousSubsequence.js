function solution() {
  let totalNum = 8;
  let target = 6;
  let arr = [1, 2, 1, 3, 1, 1, 1, 2];

  let answer = 0;
  let leftP = 0;
  let sum = 0;

  for (let rightP = 0; rightP < arr.length; rightP++) {
    sum += arr[rightP];
    if (sum === target) answer++;
    while (sum > target) {
      sum -= arr[leftP++];
      if (sum === target) answer++;
    }
  }

  console.log(answer);
}

solution();
