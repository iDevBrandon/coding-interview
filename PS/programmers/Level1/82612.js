// 부족한 금액 계산하기

function solution(price, money, count) {
  var answer = 0;
  let cost = 0;

  for (let i = 0; i <= count; i++) {
    cost += price * i;
  }

  if (cost < money) {
    return answer;
  } else {
    return cost - money;
  }
}

// Price:3, want to ride 4 times.
// 3 + 6 + 9 + 12 = 30, but have only 20, so return 10
