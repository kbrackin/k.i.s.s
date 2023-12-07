import axios from "axios";

const toGPT = (issueData) =>
  axios
    .post("/api/chatgpt/", issueGPT)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

export default toGPT;

// const toGPT = (issueGPT) =>
//   axios
//     .post("/api/chatgpt/", issueGPT)
//     .then(function (response) {
//       return response;
//     })
//     .catch(function (error) {
//       return error;
//     });

// export default toGPT;
