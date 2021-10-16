let count = 0;
count += 1;

const message: string = "Hello world";
const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["Hello", "world"];

messages.push("2");

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: "red" | "orange" | "yellow" = "red";
color = "yellow";

// 함수 작성
function sum(x: number, y: number): number {
  return x + y;
}

const result = sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

// if return nothings, it gives a void
function returnNothing(): void {
  console.log("bla bla");
}

returnNothing();
