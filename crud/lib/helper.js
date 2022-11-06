const BASE_URL = "http://localhost:3000";

export const getUser = async () => {
  const res = await (await fetch(`${BASE_URL}/api/users`)).json();

  return res;
};
