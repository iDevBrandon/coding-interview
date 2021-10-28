// expects a parameter to be either a number or a string
let result;
function add(input1: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = add(30, 26);
console.log(combinedAges);

const combinedNames = add("Max", "Anna");
console.log(combinedNames);
