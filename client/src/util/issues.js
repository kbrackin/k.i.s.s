import axios from "axios";
import Auth from "../util/auth";

const toIssues = (userId, issue, resolved) =>
  axios
    .post(`/api/issue/${userId}`, {
      issues: `${issue}`,
      resolved: `${resolved}`,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

export default toIssues;
