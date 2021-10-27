function add(num1: number, num2: number, showResult: boolean) {
  if (showResult) {
    console.log(num1 + num2);
  } else {
    return num1 + num2;
  }
}

const num1 = 5;
const num2 = 2.4;
const showResult = true;

add(num1, num2, showResult);
