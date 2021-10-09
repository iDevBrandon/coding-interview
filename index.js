function binarySearch(arr, el) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== el && left <= right) {
    if (el < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor(arr.length / 2);
  }
  return arr[mid] === el ? mid : -1;
}
binarySearch([1, 4, 6, 7, 8, 11], 6);
