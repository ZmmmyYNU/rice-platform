// const API = process.env.REACT_APP_API_URL;
const API = "localhost:3000";
const localToken = "_auth_token";

export const getToken = () => window.localStorage.getItem(localToken);

export const handleUserResponse = ({ user }) => {
  window.localStorage.setItem(localToken, user.token || "");
  return user;
};

export const login = (data) => {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const register = (data) => {
  return fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const logout = async () => {
  window.localStorage.removeItem(localToken);
  window.location.href = "/";
};
