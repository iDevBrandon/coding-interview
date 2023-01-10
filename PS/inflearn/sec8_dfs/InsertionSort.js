function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(arr);
}

solution([11, 7, 5, 6, 10, 9]);

// expected result
// 5, 6, 7, 9, 10, 11
