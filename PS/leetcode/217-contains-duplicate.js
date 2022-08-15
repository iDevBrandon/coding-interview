// https://leetcode.com/problems/contains-duplicate/

// return true if any value appears at least twice in the array

// I -> nums = [1,2,3,1]
// O -> true , "1" appears 2 times

var containsDuplicate = function (nums) {
  let answer = false;

  const tempArr = nums.sort((a, b) => a - b);

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      answer = true;
    }
  }

  return answer;
};
