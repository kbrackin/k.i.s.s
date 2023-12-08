import axios from "axios";

const toIssues = (userId) =>
  axios
    .post(`/api/issue/${userId}`, {
      issues: "borken",
      resolved: false,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

export default toIssues;

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
