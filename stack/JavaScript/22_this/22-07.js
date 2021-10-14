// 22.2.1 일반 함수 호출
// 기본적으로 this에는 전역 객체가 바인딩된다.

function foo() {
  console.log("foo this:", this); // window

  function bar() {
    console.log("bar this: ", this); // window
  }
  bar();
}
foo();
