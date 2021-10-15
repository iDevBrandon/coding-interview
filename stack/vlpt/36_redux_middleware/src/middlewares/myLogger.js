const myLogger = (store) => (next) => (action) => {
  console.log(action);
  const result = next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState());
  return result;
};

export default myLogger;
