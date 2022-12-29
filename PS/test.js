function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > 0 && arr[i] < 0) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  console.log(arr);
}

solution([1, 2, 3, -3, -2, 5, 6, -6]);
