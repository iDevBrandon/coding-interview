import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { getPost } from "../modules/posts";

const PostListContainer = () => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러!</div>;
  if (!data) return null;

  return <PostList posts={data} />;
};

export default PostListContainer;
