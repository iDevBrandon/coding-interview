/**
 * 
 * 217 Contains Duplicate
 * Solution 1
 * @param {number[]} nums
 * @return {boolean}
 */


 

let answer = true;
let count = 0;

var containsDuplicate = function (nums) {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

/**
 * Solution 2
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numbers = new Set();

  for (let num of nums) {
    if (!numbers.has(num)) {
      numbers.add(num);
    } else {
      return true;
    }
  }

  return false;
};
