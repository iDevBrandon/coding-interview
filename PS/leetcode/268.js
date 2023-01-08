// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

// 268 - missing number
// difference
// https://i.stack.imgur.com/mEtro.png

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let arr = [];
  let sortedArr = nums.sort(); // [0,1,3]

  let arrLength = nums.length;
  let first = sortedArr[0]; // 0
  let last = nums.length; // 3

  for (let i = 0; i <= last; i++) {
    arr.push(i);
  }

  let answer = arr.filter((x) => !sortedArr.includes(x)); // check what's not included in arr array. 

  return answer;
};
