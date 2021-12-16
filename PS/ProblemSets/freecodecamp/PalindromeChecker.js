function palindrome(str) {
  let reg = /[\W_]/g;

  let smallStr = str.toLowerCase().replace(reg, "");

  // compare the length
  let reversed = smallStr.split("").reverse().join("");
  if (reversed === smallStr) return true;
  return false;
}

palindrome("eye");
