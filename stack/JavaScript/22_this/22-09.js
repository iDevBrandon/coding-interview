// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;
const obj = {
  value: 100,
  foo() {
    console.log("foo's this:", this); // {value: 100, foo: f}
    console.log(this.value); // 100
  },
};

// 이처럼 일반 함수로 호출된 모든 함수(중첩 함수, 콜백 함수 포함) 내부의 this에는 전역 객체가 바인딩된다.