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

사용자 경험 개선
11 A - 포스트 리스트 데이터 유지 및 포스트 데이터 초기화
포스트 목록을 재로딩하는 문제를 해결
12 B - 포스트 데이터 상태 구조 바꾸기
13 C - 유틸함수 작성 (리팩토링 again)
14 Thunk 함수에서 리액트 라우터 History 사용하기
15
16 run JSON server wit "npx json-server ./data.json --port 4000"
17 redux-saga p.502
redux-thunk는 함수 형태의 액션을 디스패치하여 미들웨어에서 해당 함수에 스토어의 dispatch와 getState를 파라미터로 넣어 사용하는 원리입니다.
saga는 액션을 모니터를 하고 있다가, 특정 작업을 실행 할 수 있습니다.

redux-saga는 Generator에 기반한 미들웨어

제너레이터 함수라는 문법을 사용합니다. 핵심 기능은 함수를 작성할 때 함수를 특정 구간에 멈춰 놓을 수도 있고, 원할 떄 다시 돌아가게 할수도 있다.

function genFunction() {
    return 1;
    return 2;
    return 3;
    return 4;
    return 5;
}

function*generatorFunction() {
    console.log('hello');
    yield 1; // yield 를 사용하면 함수를 잠시멈춰두고, 1을 리턴
    console.log('gen func');
    yield 2;
    console.log('function*');
    yield 3;
    return 4;
}

멈출때는 yield를 사용하고, 넘어 갈땐 next()를 사용

ex)
function* inifiniteAddGenerator(){
    let result = 0;
    while(true) {
        result += yield result;
    }
}

18 기초 비동기 카운터 구현
redux-saga에서 제공하는 여러 유용한 유틸 함수를 사용하여 액션을 쉽게 처리할 수 있습니다.

19 redux-saga로 프로미스 다루기 p.511
20 프로미스 관련 리팩토링 p.515
21 라우터 연동
22 select로 현재 상태 조회하기 p.517
