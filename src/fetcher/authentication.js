import axios from "axios";

const login = (credential) => {
  return axios({
    method: "post",
    url: `${process.env.REACT_APP_API_ENDPOINT}/login`,
    data: credential,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default login;
