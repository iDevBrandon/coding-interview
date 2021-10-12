// this는 어디서든지 참조 가능하다.
// 전역에서 this는 window를 가리킨다.
console.log(this); // window

function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
  return number * number;
}

square(2); // 4

const person = {
  name: "Brandon",
  getName() {
    // 메소드 내부에서 this는 메소드를 호출한 객체를 가리킨다.
    console.log(this); // { name: 'Brandon', getName: [Function: getName] }
    return this.name;
  },
};
console.log(person.getName()); // Brandon

function Person(name) {
  this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this); // Person { name: 'Brandon' }
}

const me = new Person("Brandon");
