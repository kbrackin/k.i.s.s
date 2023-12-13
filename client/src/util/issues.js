import axios from "axios";
import Auth from "../util/auth";

const toIssues = (userId, question) =>
  axios
    .post(`/api/issue/${userId}`, {
      issues: `${question}`,
      resolved: false,
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

export default toIssues;
