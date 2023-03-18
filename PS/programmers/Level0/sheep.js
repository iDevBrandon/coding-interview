function solution(n, k) {
  var answer = 0;

  let meat = 12000;
  let drinks = 2000;
  let services = 0;
  if (meat > 10) {
    services = Math.floor(n / 10);
  }

  console.log(meat, drinks, services);
  answer = meat * n + drinks * k - drinks * services;
  return answer;
}

// 양꼬치 12000, n
// 음료수 2000, k
