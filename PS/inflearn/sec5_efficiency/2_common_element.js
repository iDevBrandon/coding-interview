// 공통 원수 구하고, 오름차순으로 정렬

function mySolution(first, second) {
  let answer = [];
  let sortedA = first.sort((a, b) => a - b);
  let sortedB = second.sort((a, b) => a - b);
  let p1 = (p2 = 0);

  while (p1 <= sortedA.length) {
    if (sortedA[p1] !== sortedB[p2]) {
      p1++;
    } else {
      answer.push(sortedB[p2++]);
    }
  }

  console.log(answer);
}

mySolution([1, 3, 10, 5, 2], [3, 2, 5, 7, 8]);

// O(N+M)