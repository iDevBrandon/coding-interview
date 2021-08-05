# FE Interview questions

## General

- DOCTYPE 이 무엇인가?
DOCTYPE은 문서 종류를 선언하는 태그, 어떤 버전의 HTML을 사용할 것인지 브라우저에게 알려줌. <!DOCTYPE html>

## HTML

## CSS

## JS

- 스코프란?
모든 식별자는 자신이 선언된 위치에 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다. 
함수 스코프 (var) & block블럭 스코프(let, const)

- 클로져(Closure)는 무엇이며, 어떻게/왜 사용하는지 설명해주세요.
클로져의 정의: 상위 스코프의 변수를 가르키는 함수이며, 클로저가 만들어진 환경을 기억한다. 

## React


## Must know
this 가 어떻게 작동하는지 설명하세요. ex) 화살표 함수, call, bind, apply 등

클로저는 무엇이며, 왜떻게/왜 사용하나요?

호이스팅

실행 컨택스트

call stack

이벤트루프

프로토타입

스코프

브라우저가 어떻게 페이지를 렌더링 하는지

## 자바스크립트 동작원리
자바스크립트는 stack이라는 공간이 있는데, 한번에 코드를 한줄밖에 실행못함. 이걸 싱글스래드라고함.

기다림이 필요한 코드들 : 이벤트리스너, ajax, setTimeout 등등.. Queue 라는 대기실에 줄을 세움.

stack이 비었을때만, queue에서 stack으로 명령 보내줄수 있음!!!

reference https://www.youtube.com/watch?v=v67LloZ1ieI&list=RDCMUCSLrpBAzr-ROVGHQ5EmxnUg&start_radio=1&rv=v67LloZ1ieI&t=19
