
/*
Rock paper scissors

5
2 3 3 1 3
1 1 2 2 3
*/

// output : A B A B D


const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


const numGames = Number(input[0]); // 5

const arrA = input[1].split(' ').map(e => Number(e)); // [2 3 3 1 3]
const arrB = input[2].split(' ').map(e => Number(e)); // [1 1 2 2 3]

let scissors = 1;
let rock = 2;
let paper = 3;


let answer = '';

for(let i=0; i< numGames; i++) {
  if(arrA[i] === arrB[i]) answer+= 'D'+' ';

  else if(arrA[i] === 1 && arrB[i] === 3 ) {
    answer+= 'A' + ' ';
  } else if (arrA[i] === 2 && arrB[i] === 1 ) {
    answer+= 'A' + ' ';
  } else if ( arrA[i] === 3 && arrB[i] === 2) {
    answer+= 'A' + ' ';
  }
  else {
    answer+= 'B' + ' ';
  }
}

console.log(answer)
