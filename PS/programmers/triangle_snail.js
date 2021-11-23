function solution(n) {
  let answer = [];

  let x = 0;
  let y = 0;
  let number = 1;
  let tempArr = [];

  for (let i = 1; i < n + 1; i++) {
    let tmp = Array(i).fill(0);
    tempArr.push(tmp);
  }

  // 규칙을 찾기
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // 밑으로 내려간다.
      if (i % 3 === 0) {
        y += 1;
        // 오른쪽으로 간다.
      } else if (i % 3 === 1) {
        x += 1;
        //위로 올라간다.
      } else {
        y -= 1;
        x -= 1;
      }
      tempArr[y][x] = number;
      number += 1;
    }
  }

  console.log(tempArr);
}

solution(5);

/**
     0  1   2   3   4 
  0  1
  1  2 12
  2  3 13  11
  3  4 14  15  10
  4  5  6   7   8  9
  
  // y축 1증가, 아래로 내려감, 나머지가 0일때
  [0,0] => 1
  [0,1] => 2
  [0,2] => 3
  [0,3] => 4
  [0,4] => 5
  // x좌표를 1더해준다, 오른쪽으로, 나머지 1일때
  [1,4] => 6
  [2,4] => 7
  [3,4] => 8
  [4,4] => 9 
  // x,y 1빼기, 대각선 올려주기
  [3,3] => 10
  [2,2] => 11
  [1,1] => 12
  
  [2,1] => 13
  [3,1] => 14
  
  [3,2] => 15
  
  
  
  
   */
