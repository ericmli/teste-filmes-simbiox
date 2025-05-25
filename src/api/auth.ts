import axios from "axios";

export const loginApi = async (email: string, password: string) => {
  return axios.post('http://localhost:8080/auth/login', {
    email,
    password
  });
};

export const registerApi = (name: string, email: string, password: string) => {
  return axios.post('http://localhost:8080/auth/register', {
    name,
    email,
    password
  });
};