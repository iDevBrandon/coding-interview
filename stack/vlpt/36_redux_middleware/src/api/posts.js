const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// {id, title, body}

const posts = [
  { id: 1, title: "Hello World", body: "Welcome to learning React!" },
  { id: 2, title: "Redux-saga", body: "Todo list with Redux-saga" },
  { id: 3, title: "Calendar", body: "You can update React from npm." },
];

export const getPosts = async () => {
  await sleep(1000);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(1000);
  return posts.find((post) => post.id === id);
};

// 여기서 dummy api 가짜 비동기 함수를 만듬. 