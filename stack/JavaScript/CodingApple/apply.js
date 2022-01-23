var person = {
  인사: function () {
    console.log("안녕");
  },
};

var person2 = {
  name: "손흥민",
};

// person.인사.apply(person2);
// person.인사 가 실행되긴 한데, person2에 적용되서 실행됨.
// apply()는 그냥 함수를 옮겨와서 실행해주세요 라고 이해하면됨. 

// call()
// apply/call 비슷함. 하지만, 파라미터를 넣을때 달라짐.
// apply()는 파라미터를 array형태로 집어넣기 가능.

person.인사.apply(person2, [1,2])
person.인사.call(person2, 1,2)