function foo() {
  "use strict";

  console.log(this); // undefined 일반 함수 내부의 this에는 undefined가 바인딩된다.
}
