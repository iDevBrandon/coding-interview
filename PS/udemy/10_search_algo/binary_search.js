// My attempt

function binarySearch(arr, value) {
  // add whatever parameters you deem necessary - good luck!
  let left = arr[0];
  let right = arr.length - 1;
  let mid;

  while (right - left >= 0) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === value) return mid;
    else if (arr[mid] > value) {
      // move right to mid
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  if (arr[mid] === value) return mid;
  else return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3);

// Colt answer
function binarySearch2(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}
