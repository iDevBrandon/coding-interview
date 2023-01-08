let r = Math.random();
let a = 10;
let f = solution(a, function () {
  return this + r;
});
let result = f();

function solution(num, f) {
  // 여기에 코드를 작성해주세요
  // f is a function that can attach bind() - create a new functin
  let ff = f.bind(num); // num is this at line 4, this function return

  // same as f.bind().
  //   function () {
  //       return num + r
  //   }

  // in this example, this(line4) become num, num = 10
  // at line 4, this + r = a + r

  // return f() at line 6
  return ff;
}
