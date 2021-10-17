// redux 적용하기
// What is returnType?
// returnType을 사용하면 특정 함수에서 내보내는 타입을 가져올수 있다.

import { combineReducers } from "redux";
import counter from "./Counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
