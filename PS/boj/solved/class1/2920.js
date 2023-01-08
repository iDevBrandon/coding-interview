2577
// ascending, descending, mixed

console.log(input);
console.log(input.sort((a, b) => a - b));

// if(input === input.sort()) {
//   console.log(123123)
//   console.log('ascending')
// } else if (input.sort((a,b) => b-a) === input) {
//   console.log('descending')
// } else {
//   console.log('mixed ')

// }

if (input === input.sort((a, b) => a - b)) {
  console.log("ascending");
} else if (input === input.sort((a, b) => b - a)) {
  console.log("descending");
} else {
  console.log("mixed ");
}
