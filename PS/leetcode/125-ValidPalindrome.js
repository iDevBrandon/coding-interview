// https://leetcode.com/problems/valid-palindrome/

// my solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let input = s.toLowerCase().replace(/[^0-9a-z]/gi, "");

  if (input.length === 0) return true;

  let reversed = input.split("").reverse().join("");

  if (input === reversed) {
    return true;
  } else {
    return false;
  }
};


// best practice
// It's Two pointers question 
// Update left and right pointers until left => right

