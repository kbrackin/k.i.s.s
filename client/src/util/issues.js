import axios from "axios";
import Auth from "../util/auth";

const toIssues = (userId, question) =>
  axios
    .post(`/api/issue/${userId}`, {
      issue: `${question}`,
      resolved: false,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

export default toIssues;
