function solution(n, arr1, arr2) {
  let answer = [];
  var temp1 = [];
  let temp2 = [];

  for (let i = 0; i < arr1.length; i++) {
    temp1.push(
      arr1[i]
        .toString(2)
        .padStart(arr1.length, "0")
        .split("")
        .map((x) => +x)
    );
    temp2.push(
      arr2[i]
        .toString(2)
        .padStart(arr1.length, "0")
        .split("")
        .map((x) => +x)
    );
  }

  // console.log(temp1, temp2)

  for (let i = 0; i < temp1.length; i++) {
    for (let j = 0; j < temp1.length; j++) {
      if (temp1[i][j] === 0 && temp2[i][j] === 0) {
        answer.push(" ");
      }

      if (temp1[i][j] === 1 || temp2[i][j] === 1) {
        answer.push("#");
      }
      // console.log('1: ' + temp1[i][j])
      // console.log('2: ' + temp2[i][j])
    }
  }

  let result = [];
  for (let i = 0; i < answer.length; i += temp1.length) {
    result.push(answer.slice(i, i + temp1.length).join(""));
  }
  console.log(temp1.length);
  return result;
}
