
for (let sides of input) {
  const side = sides
    .split(" ")
    .map((num) => Math.pow(num, 2))
    .sort((a, b) => a - b);


}
