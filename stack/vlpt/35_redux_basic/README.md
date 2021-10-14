# 35 Redux basic

Context 쓰는 거랑 무슨 차이점이 있을까?

1. 미들웨어
   비동기 작업을 더욱 채게적으로 관리 가능

2.유용한 함수와 Hooks
react-redux : connect, useSelector, useDispatch, useStore

3.하나의 커다란 상태
store에 담겨져서, 객체를 이용함

## 35-1. 리덕스에서 사용되는 키워드 숙지하기

Action ( 액션) - 상태 변화가 필요할때
{
type: 'TOGGLE_TODO',
}

액션 객체는 type 필드를 반드시 가지고 있어야한다. 그 외 값들은 payload

액션 생성함수 (action creator) - 액션 객체를 만들어 주는 함수입니다.

리듀서 - (state, action)을 가지고 변화를 일으키는 함수

function reducer(state = initialState, action) {
switch (action.type) {
case INCREMENT:
return {
counter: state.counter +1
}
default:
return state
}
}

- 불변성을 유지해줘야한다.

스토어
스토어 안의 현재 애플리케이션 상태와 리듀서를 가지고 있고, 그 중 하나가 디스패치입니다

디스패치(dispatch) - '액션을 발생시키는 것' 이라고 이해시키면 좋음.
dispatch({ type: ' INCREMENT'})
해당 액션이 리듀서에 전달되서, 리듀서 함수는 새로운 상태를 만들어 줍니다.

구독(subscribe)
스토어의 내장함수. 액션이 디스패치되어 상태가 업데이트될 때마다 호출됩니다.

## 3가지 리덕스의 규칙

1. 단일 스토어
   하나의 어플리케이션에는 하나의 스토어가 있다.

2. 읽기 전용 상태
   기존의 객체는 건드리지 않고 새로운 객체를 생성해 주어야합니다.

3. 리듀서는 순수한 함수

- 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받습니다.
- 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환합니다.
- 똑같은 피라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야합니다

ex) new Date(), Math.random(), axios.get() 같은 호출 할때마다 다른 결과를 만들어 낼 수 있기에 사용하면 안됩니다.
주로 네트워크 요청과 같은 비동기 작업은 미들웨어를 통해 관리합니다.

