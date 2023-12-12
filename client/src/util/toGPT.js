import axios from "axios";
import Auth from "../util/auth";

const toGPT = (issueGPT) =>
  axios
    .post("/api/chatgpt/", issueGPT, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    })

    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

export default toGPT;

{
  headers: {
    Authorization: `Bearer ${Auth.getToken()}`;
  }
}

// axios
// .post("/api/chatgpt/", issueGPT)
// .then(function (response) {
//   return response;
// })
// .catch(function (error) {
//   return error;
// });
