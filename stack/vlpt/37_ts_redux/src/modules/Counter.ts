// 액션, 액션 생성함수, 리듀서도 선언
const INCREASE = "counter/INCREASE" as const; // by putting "as const" - we can set the type on action creator
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

// reducer를 작성할땐, type을 정의해줘야함
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// reducer 구현
function Counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };

    default:
      return state;
  }
}

export default Counter;
