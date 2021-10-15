import * as postsAPI from "../api/posts";

// 액션 타입을 선언
// 한 요청당 세 개를 만들어야함.

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

// thunk 함수를 생성합니다
// thunk 함수 내부에서는 시작할 때, 성공했을 떄, 실패했을 때 다른 액션을 디스패치합니다

// getPosts 라는 thunk 생성자 함수
export const getPosts = () => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POSTS });
  // API 호출
  // 성공했을 때
  try {
    const posts = await postsAPI.getPosts();
    dispatch({ type: GET_POSTS_SUCCESS, posts });
  } catch (e) {
    // 실패했을 때
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};

export const getPost = (id) => async (dispatch) => {
  // 요청이 시작됨
  dispatch({ type: GET_POST });
  // API 호출
  // 성공했을 때
  try {
    const post = await postsAPI.getPost(id);
    dispatch({ type: GET_POST_SUCCESS, post });
  } catch (e) {
    // 실패했을 때
    dispatch({ type: GET_POST_ERROR, error: e });
  }
};
