# 리덕스 미들웨어

액션 -> 미들웨어 -> 리듀서 -> 스토어

리듀서에서 무시될수 있음 or 액션이 미들웨어 넘어가기전에 특정 코드를 실행 시킬수도 있음.

주로 비동기 작업을 처리 할 때 사용
예) API 요청

대표적으로 리덕스 떠크/사가 있음

## redux-thunk

비동기 작업을 처리할 때 가장 많이 사용하는 미들웨어입니다.
객체가 아닌 함수 형태의 액션을 디스패치할 수 있게 해줍니다.

Thunk란?

Thunk는 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미합니다.

Redux-thunk 로 Promise 다루기
5 A - Thunk 작성하기(생성)
6 B - reducerUtils 작성하기 p.487
7 C - createPromiseThunk로 리팩토링 p.495
8 D - handleAsyncActions 작성하기 p.496
9 E - 포스트 리스트 구현하기. react-router-dom
10 F - 라우터 연동, 특정 포스터 읽기 Route, Link 작성
11
12
13
14
15
16
17
18
19
20
21
22
