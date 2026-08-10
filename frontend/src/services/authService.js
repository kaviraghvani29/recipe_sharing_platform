import api from "./api";

//register
export const registerUser = async (userData) => {
  const response = await api.post("auth/register", userData);

  return response.data;
};

//login
export const loginUser = async (userData) => {
  const response = await api.post("auth/login", userData);

  return response.data;
};

//get profile
export const getProfile = async () => {
  const response = await api.get("user/myprofile");

  return response.data;
};

//logout
// export const logoutUser = async () => {
//   const response = await api.get("auth/logout");

//   return response.data;
// };
