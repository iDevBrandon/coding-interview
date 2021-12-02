// my attempt
// failed - idk why

function solution(s) {
  var answer = "";

  let each = s.toLowerCase().split(" ");
  let withUpper = [];

  for (let i of each) {
    withUpper.push(i[0].toUpperCase() + i.slice(1));
  }

  answer = withUpper.join(" ");

  //     for(let i=0; i<each.length; i++) {}

  return answer;
}

solution("3people unFollowed me");

// other's reference code
// what i was missing is that "s" can contain empty string

function solution(s) {
  var answer = "";

  let each = s.toLowerCase().split(" ");
  let withUpper = [];

  let temp = each
    .map((str) => (str === "" ? "" : str.replace(str[0], str[0].toUpperCase())))
    .join(" ");

  answer = temp;

  return answer;
}
