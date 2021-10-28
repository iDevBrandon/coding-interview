function add(num: number) {
  return num;
}

function printReulst(num1: number, num2: number): void {
  console.log(num1 + num2);
}

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
