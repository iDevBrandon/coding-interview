// brute-force no.1

// sum of number

function solution(n, arr) {
  let answer,
    max = 0;

  for (let x of arr) {
    let sum = x.toString().split("");
    console.log(sum)

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// figure out each num sum [11, 10, 9, 4, 8, 11,6] => '137' cuz 137> 128
