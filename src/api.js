import axios from "axios";

export const apiURL = `https://dbusersdata-json.onrender.com/users`;

export const getUsers = async () => {
  try {
    const response = await axios.get(apiURL);
    console.log(response.data)
    return response.data || [];
  } catch (error) {
    console.error("Error Fetching Users:", error);
    return [];
  }
};

export const addUser = async (user) => {
  try {
    await axios.post(apiURL, user);
  } catch (error) {
    console.error("Error Adding User:", error);
  }
};

export const editUser = async (id, user) => {
  try {
    await axios.put(`${apiURL}/${id}`, user);
  } catch (error) {
    console.error("Error Updating User:", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${apiURL}/${id}`);
  } catch (error) {
    console.error("Error Deleting User:", error);
  }
};
