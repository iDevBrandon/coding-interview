// my solution
function solution(number, limit, power) {
  var answer = 0;

  let divisorArr = [];

  function findDivisor(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    return count;
  }

  // 약수 구하기
  for (let i = 1; i <= number; i++) {
    divisorArr.push(findDivisor(i));
  }

  // if its over limit, replace to power
  for (let i = 0; i < divisorArr.length; i++) {
    if (divisorArr[i] > limit) {
      // replace to power
      divisorArr[i] = power;
    }
    answer += divisorArr[i];
  }

  console.log(answer);
  return answer;
}

// 각 기사는 약수 개수에 해당하는 무기

// [1,2,2,3,2] 1,2,3,4,5
// limit 3
// sum 10

// [1,2,2,3,2,4,2,4,3,4], limit = 3
// [1,2,2,3,2,2,2,2,3,2] =
