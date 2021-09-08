# Learn React with Velopert

## 1 - Mordern React

### 12. useRef로 컴포넌트 안의 변수 만들기

useState 경우 값을 바꿀을때, 리렌더링을 하는데, 가끔식은 리렌더링을 불필요할때도 있다.
useRef는 특정 돔을 선택하고 싶을떄 사용할 수 있지만, 또는 어떤한 변수를 기억하고 싶을때

### 13. 배열에 항목 추가하기

spread operator를 사용하여 배열을 추가할 수 있다.
concat() 은 여러개의 배열을 하나의 배열로 합칠 수 있다.

### 20. useReducer - 기초 
useReducer는 액션을 기반으로 상태를 업데이트 한다.
dispatch({ type: 'INCREMENT, diff: 4 })

상태 업데이트 로직을 컴포넌트 밖으로 분리 가능

reducer: 상태를 업데이트 하는 함수

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' : 
            return state + 1;
        case 'DECREMENT' : 
            return state -1;
        default :
            return state
    }
}

useReducer를 쓸때는 
const [number, dispatch] = useReducer(reducer, 0)
number: 현재 상태, dispatch는 액션을 발생시키는 함수. 