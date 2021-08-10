let sum = 0;

function sumFunc(input) {
  let digits = String(input).split("").map(Number);

  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }

  return sum;
}

sumFunc(315); // 9
