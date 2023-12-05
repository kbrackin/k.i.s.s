import axios from "axios";

const toGPT = (issueGPT) =>
  axios
    .post("/api/chatgpt/", issueGPT)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

export default toGPT;
