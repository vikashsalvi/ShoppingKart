/**

 @author    Rashmika Ibrahimpatnam => B00832190

**/
import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // seting authorization token if the user has logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Deleting authorization header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;