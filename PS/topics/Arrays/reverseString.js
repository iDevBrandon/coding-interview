// A function that reverse a string

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm its not string";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

console.log("iDevBrandon");
