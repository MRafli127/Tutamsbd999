// src/api.js

const API_BASE = "http://localhost:5000";

export const getTodos = async () => {
  const res = await fetch(`${API_BASE}/todos`);
  return res.json();
};

export const createTodo = async (data) => {
  const res = await fetch(`${API_BASE}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateTodo = async (id, data) => {
  const res = await fetch(`${API_BASE}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${API_BASE}/todos/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
