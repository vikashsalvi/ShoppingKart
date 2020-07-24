import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // set authorization token to every request if the user is logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete authorization header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;