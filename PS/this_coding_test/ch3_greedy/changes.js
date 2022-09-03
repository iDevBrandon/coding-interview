// 500, 100, 50, 10 coins
// we should return N to the customer
// but we want to give the minimum of coins to the customer

function changes(n) {
  let count = 0;
  const coin_types = [500, 100, 50, 10];

  for (let coin of coin_types) {
    count = count + Math.floor(n / coin); // count the number of coins
    n = n - coin * Math.floor(n / coin); // Calculate the left of n
  }

  return count;
}

console.log(changes(1260));

// 500 -> 1260%500 -> 760, count = 1;
// 500 -> 760%500 -> 260, count = 2;
// 100 -> 260%100 -> 160, count = 3;
// 100 -> 160%100 -> 60, count = 4;
// 50 -> 60%50 -> 10, count = 5;
// 10 -> 10%10 -> 0, count = 6;

// Exercise 
// [BOJ|Node.js] - changes
// https://www.acmicpc.net/problem/5585

