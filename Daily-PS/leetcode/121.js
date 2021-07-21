// My attempt

var maxProfit = function (prices) {
  let min = Math.min(...prices);

  let minIndex = prices.findIndex((el) => el === min);

  if (minIndex === prices.length - 1) {
    return 0;
  }

  let arr = prices.slice(minIndex + 1);

  let maxNum = Math.max(...arr);
  return maxNum - min;
};

// soluction by others
let maxProfit = function (prices) {
  let result = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    result = Math.max(result, prices[i] - min);
  }

  return result;
};
