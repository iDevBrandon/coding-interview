import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];


// /posts => ["posts"]
// /posts/1 ["posts", post.id]
// posts?authorId=1 => ["posts", {authorId: 1}]
// /posts/2/comments => ["posts", post.id, "comments"]

function App() {
  const queryClient = useQueryClient();
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]), // must return a promise
  });

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title })
      );
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleCreatePost = () => {
    console.log(POSTS);
    newPostMutation.mutate("New Post");
  };

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <div className="">
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}

      <button disabled={newPostMutation.isLoading} onClick={handleCreatePost}>
        Add new
      </button>
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
