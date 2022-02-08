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

person.인사.apply(person2, [1, 2]);
person.인사.call(person2, 1, 2);

function 더하기(a, b = 10) {
  // 함수의 default 파라미터
  console.log(a, b);
}

더하기(1);

function 함수(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

함수(1, 2, 3);

// ## 함수에서 쓰는 점 3개 Rest 파라미터를 알아봅시다
// ... 을 사용할때
// 1. spread operator
// 2. rest parameter

// Rest 파라미터
// 이 자리에 오는 모든 파라미터를 []에 보관해줌

function 함수2(a, b, ...파라미터들) {
  console.log(파라미터들);
}

함수2(1, 2, 3, 4, 5, 6, 7); // [3,4,5,6,7] // arguments 와 차이

function 함수3(...rest) {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

함수3(1, 2, 3, 4, 5, 6, 7);

// spread, rest 피라미터 연습문제

// 1. spread

var a = [1, 2, 3];
var b = "김밥";
var c = [...b, ...a];
console.log(c); // 정답 : ['김','밥', 1,2,3]

// 2. spread

var a = [1, 2, 3];
var b = ["you", "are"];
var c = function (a, b) {
  console.log([[1, 2, 3], "you", "are"][1]); // 'you'
};
// [...b] => ['youare']
c(a, b); // [1,2,3, o]

// 3. default 파라미터 1

function 함수(a = 5, b = a * 2) {
  console.log(a + b);
  return 10;
}
함수(3); // 정답 = 3 + 6 = 9

// 4. default 파라미터 2

function 함수(a = 5, b = a * 2) {
  console.log(a + b);
}
함수(undefined, undefined); // 정답: 5 + 10 = 15

// 5. array를 만들어주는 함수를 제작하고 싶습니다
function 어레이() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

var newArray = 어레이(...rest);
console.log(newArray); // [1,2,3,4,5]

// 6. 최댓값 구하기
Math.max(...numbers);

// 7. 글자를 알파벡순으로 정렬해주는 함수를 만들고 싶습니다.
function 정렬(str) {
  [...str].sort();
}

// 8. 데이터마이닝 기능 만들기
function 글자세기(data) {
  var result = {};

  [...data].forEach(function (a) {
    if (result[a] > 0) {
      result[a] = result[a] + 1;
    } else {
        result[a] = 1;
    }
  });


}

글자세기("aacbb"); // {a:2,b:3,c:1}
