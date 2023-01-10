// 1. 자릿수의 합
// Comment : reduce를 활용하여, 각각의 element 값을 구햇지만, 같은 수가 있을땐 어떻게 비교를 해야할지 모르겟음. index는 indexOf을 활용하여 찾아서 리턴을 하거나, 그 값을 활용해서 리턴해서 해결하려고 했음.

function mySolution(arr) {
  let answer = 0;
  let temp = 0;
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    let tA = arr[i]
      .toString()
      .split("")
      .map((x) => +x);

    const sumWithInitial = tA.reduce((a, c) => a + c, 0);

    tempArr.push(sumWithInitial);

    // 밑줄부터는 내가 놓친 부분

    if (tempArr[i] > temp) {
      temp = tempArr[i];
      answer = arr[i];
    } else if (tempArr[i] === temp) {
      // 11이 2개 나옴 그래서 같으면
      console.log(tempArr[i], temp); // 여기서 변수명때문에 살짝 해깔림
      console.log(arr[i], answer);
      if (arr[i] > answer) {
        answer = arr[i]; // 같으면 오리지널을 비교해서, answer을 바꿔줌
      }
    }
  }

  // console.log(tempArr); // [ 11,  9, 9, 4, 8, 11, 6 ]
  // const max = Math.max(...tempArr);
  // const index = tempArr.indexOf(max);
  return answer;
}

mySolution([128, 360, 603, 40, 521, 137, 123]);

// Lecture notes

function solution() {}
