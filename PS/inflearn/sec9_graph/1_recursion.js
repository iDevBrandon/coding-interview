// 1. 재귀함수와 스택프레임(중요)
function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      console.log(L);
      DFS(L - 1);
    }
  }

  DFS(n);
}

solution(3); // 3, 2 ,1

// 차이점
// stack 이란 구조안에, 함수들이 들어가 있는데, 거기 안에 매개변수/지역변수/복귀주소 등이 저장이 됨. 함수들이 pop() 하면서, 각각의 함수를 실행시킴.

// 1. 재귀함수와 스택프레임(중요)
function solution2(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }

  DFS(n);
}

solution2(3); // 1, 2, 3
