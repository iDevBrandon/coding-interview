const circle = {
  // 프로퍼티: 객체 고유의 상태 데이터
  radius: 5,
  // 메소드: 상태 데이터를 참조하고 조작하는 동작
  getDiameter() {
    // 이 메소드가 자신이 속한 객체의 프로퍼티나 다른 메소드를 참조하려면
    // 자신이 속한 객체인 circle을 참조할 수 있어야한다.
    return 2 * circle.radius;
  },
};

console.log(circle.getDiameter()); // 10


/**
 * 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야한다.
 * getDiameter 메소드 내에서 메소드 자산이 속한 객체를 가리키는 식별자 circle을 참조하고 있다. 
 * 이 참조 표현식이 평가되는 시점은 getDiameter 메소드가 호출되어 함수 몸체가 실행되는 시점이다. 
 */