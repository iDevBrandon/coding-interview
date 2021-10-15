import * as postsAPI from "../api/posts";
import { createPromiseThunk, reducerUtils } from "../lib/AsyncUtils";

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
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

// 초기상태 선언 & 리듀서 작성

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: reducerUtils.loading(),
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.payload),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.payload),
      };

    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading(),
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.payload),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.payload),
      };
    default:
      return state;
  }
}
