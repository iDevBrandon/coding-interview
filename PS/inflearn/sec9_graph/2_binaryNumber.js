// 이진수 출력(재귀)

function solution(n) {
  let answer = "";
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2));
      answer += String(L % 2);
    }
  }

  DFS(n);
  console.log(answer);
}

solution(11);
