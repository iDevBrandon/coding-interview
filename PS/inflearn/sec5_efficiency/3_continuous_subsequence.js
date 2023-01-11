// 연속 부분수열 1

// N = 8, M = 6

// N = [1,2,1,3,1,1,1,2], 합이 6이 되는 연속 부분수열 찾기

function mySolution(N, M) {
  let lt = (rt = 0);
  let answer = 0;
  let temp = 0;

  for (let i = 0; i < N; i++) {
    if ((temp += N[i] === M)) {
      answer++;
      temp -= N[i];
      lt++;
    } else {
      rt++;
    }
  }

  console.log(answer);
}

mySolution([1, 2, 1, 3, 1, 1, 1, 2], 6);
