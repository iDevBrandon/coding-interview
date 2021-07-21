function solution(a, b, c) {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (answer > c) answer = c;

  return answer;
}

solution(6, 5, 23);

// 4. sum 1 to N
function sumtoN(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

// 5. Find the min num
// can set 5 as the first element and compare the rest in for loop
function findMinNum(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  answer = min;
  return answer;

  // return Math.min(...arr);
}

let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(findMinNum(arr));

// 6 odd num
function oddNum(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let num of arr) {
    if (num % 2 !== 0) {
      sum += num;
      if (num < min) min = num;
    }
  }

  answer.push(sum);
  answer.push(min);

  return answer;
}

// arr = [12, 77, 38, 41, 53, 92, 85];
// console.log(oddNum(arr));

// 7 everyEndNum
function everyEndNum(day, arr) {
  let answer;
  for (let num of arr) {
    if (arr[num] % 10 === day) answer++;
  }

  return answer;
}

// arr = [25, 23, 11, 47, 53, 17, 33];
// console.log(everyEndNum(3, arr));

// 8 Seven Dwarfs
function sevenDwarfs(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log(sum);

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(sevenDwarfs(arr));
