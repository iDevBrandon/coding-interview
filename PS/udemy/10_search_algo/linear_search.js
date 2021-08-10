// My Answer

function linearSearch(arr, ans) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ans) {
      return i;
    } else {
      return -1;
    }
  }
}

// Colt answer

function linearSearch(arr, ans) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ans) {
      return i;
    }
  }
  return -1;
}
