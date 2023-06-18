import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = "http://localhost:3001";

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Register User

export const registerUser = (userData) => {
  return axios
    .post(`${BACKEND_URL}/api/users/register`, userData, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.statusText === "OK") {
        toast.success("User Registered successfully");
      }
      return response.data;
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    });
};

//Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData,
      {
        withCredentials: true,
      }
    );
    if (response.statusText === "OK") {
      toast.success("Login successfully");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
