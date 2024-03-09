import axios from "axios";

export const setAuthenticationHeader = authToken => {
  axios.defaults.headers.common["token"]= authToken;
};

export const removeAuthenticationHeader = () => {
  delete axios.defaults.headers.common["token"];
};

