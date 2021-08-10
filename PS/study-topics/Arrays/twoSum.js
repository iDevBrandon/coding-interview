function twoSum(nums, target) {
  let numArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      numArray.push(nums[i]);
    }
  }

  return nums;
}

twoSum([3, 2, 4], 6);

Input: (nums = [3, 2, 4]), (target = 6);
Output: [1, 2];

var twoSum = function (nums, target) {
  const previousValues = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const needValues = target - currentNumber;
    const index2 = previousValues[needValues];
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[currentNumber] = i;
    }
  }
};
