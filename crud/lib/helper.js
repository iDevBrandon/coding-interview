const BASE_URL = "http://localhost:3000";

// Get users
export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  const json = await res.json();

  return json;
};

// Get a user
export const getUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await res.json();

  if (json) return json;
  return {};
};

// Add a user
export const addUser = async (formData) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users`, options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};

// Update a user
export const updateUser = async (userId, formData) => {
  try {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`${BASE_URL}/api/users/${userId}`, options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};
