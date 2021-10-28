function add(num: number) {
  return num;
}

function printReulst(num1: number, num2: number): void {
  console.log(num1 + num2);
}

function addAndPrint(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

addAndPrint(10, 20, (result) => {
  console.log(result);
});
