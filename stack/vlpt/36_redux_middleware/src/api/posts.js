import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};

// 여기서 dummy api 가짜 비동기 함수를 만듬.
