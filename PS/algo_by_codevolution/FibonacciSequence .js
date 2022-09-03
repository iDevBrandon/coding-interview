`## Fibonacci sequence 
Problem - 
Give a number 'n', 
find the first 'n' elements of the Fibonacci sequence`;

`
The first two numbers in the sequence are 0 and 1. 
fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
`;

function answer(n) {
  let arr = [0, 1]; // initial
  for (let i = 2; i < n; i++) {
    console.log(arr[i] = , i + 1);
  }

  console.log(arr);
}

answer(7); // [0,1,1,2,3,5,8]

// 0, 1
