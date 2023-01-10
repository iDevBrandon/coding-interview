// Special Sort(버블정렬응용), bubble sort

// 1. 문제 이해
// 음의 정수는 앞쪽에, 양의 정수는 뒷쪽에, 순서의 변함은 없어야한다.

// 2. 해결 방법

// 1 2 3 -3 -2 5 6 -6
// 첫번째와 그 뒷 숫자를 비교하여, 만약 뒤의 숫자가 음수 일경우, 순서를 바꿔준다.


// 3. 코드 구현

// 방법 1

function solution1(arr) {
  let answer = [];


  for(let i=0; i<arr.length-1; i++) {
    for(let j=0; j< arr.length-i-1; j++) {
      if(arr[j] > 0 && arr[j+1] <0) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }

    console.log(arr)
  }



  // for(let i=0; i<arr.length-1; i++) {
  //   for(let j=0;  j<arr.length-1; j++) {
  //     console.log(arr[j], arr[j+1])
  //   }
  // }
}


// 방법 2

function solution2(arr) {
  let answer = [];
  let plus = [];
  let minus = [];
  for(let i=0; i<arr.length; i++) {
    // 그 숫자가 0보다 작을 경우
    if(arr[i] < 0) minus.push(arr[i])
    else plus.push(arr[i])
  }

  answer = [...minus, ...plus];

  console.log(answer);
}

solution1([1, 2, 3, -3, -2, 5, 6, -6])

// solution2([1, 2, 3, -3, -2, 5, 6, -6])

// 4. 결과 분석