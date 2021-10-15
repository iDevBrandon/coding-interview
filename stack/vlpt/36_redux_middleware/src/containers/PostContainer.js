import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { getPost, goToHome } from "../modules/posts";

const PostContainer = ({ postId }) => {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId] || {}
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch, data]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>To Home</button>
      <Post post={data} />
    </>
  );
};

export default PostContainer;
