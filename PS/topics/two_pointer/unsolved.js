function solution(arr) {
  let sum = 0;
  let temp = [];
  let leftP = 0;

  for (let rightP = 0; rightP < arr.length; rightP++) {
    // 각 left 포인트 기준으로 temp에 넣어주기
    temp.push(arr[rightP]);

    while (arr[rightP++] !== 0) {
      // 만약 다음 숫자가 없으면
      temp.push(arr[leftP], arr[rightP++]);
    }

    leftP++;
  }

  console.log(temp);
}
let arr = [3, 1, 2, 4];
solution(arr);

/**
   * 
   LpRp
   3     1    2   4 
  
   lp => 3, [3], [3,1], [3,1,2], [3,1,2,4]
   lp => 1, [1], [1,2], [1,2,4]
   lp => 2, [2], [2,4],
   lp => 4, [4] 
  
   
   * 연속부분수열이 여러개 존재하는데, 
   * 각 연속부분수열의 원소 중 최소값을 구하여 합한 결과를 리턴
   * 주어진 수열 [3,1,2,4] 
   * 
   * 연속된 부분수열은 
   * [3],[1],[2],[4],[3,1],[1,2],[2,4],[3,1,2],
   * [1,2,4], [3,1,2,4] 
   * 
   * 1. 연석된 수열을 정리를 한다.
   * 2. 각 부분수열의 최솟값을 일단 출력한다 
   *  3,1,2,4,1,1,2,1,1,1이 나오게 된다.
   * 
   * 3. 2번에서 구한 최소값을 전부 더해서 리턴
   *  => return 17 
   * 
   */
