// 뒤집은 소수

// my idea :
// 1. 뒤집고, map활용해서 숫자화 시키고
// 2. 소수인지 아닌지 찾은다음
// 3. 소수이면 answer array에 푸쉬

function isPrime(number) {
  if (number <= 1) return false;
  else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  }
}

function mySolution(arr) {
  let answer = [];
  let temp = [];

  // task 1
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i].toString().split("").reverse().join(""));
    temp.push(num);
  }

  temp.forEach(function (val) {
    if (isPrime(val)) answer.push(val);
  });

  console.log(answer);
}

mySolution([32, 55, 62, 20, 250, 370, 200, 30, 100]);

// note :
// parseInt를 사용하면 앞에 0을 제거하고, integer를 리턴해줌

// ## 강의
// while 문을 활용해서 10으로 나누기

function isPrimeNum(num) {
  if (num <= 1) return false;
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }

    if (isPrimeNum(res)) answer.push(res);
  }

  return answer;
}

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
