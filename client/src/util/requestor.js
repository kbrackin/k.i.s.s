import axios from "axios";

const getReqs = () =>
  axios
    .get("/api/issue/users/")
    .then(function (response) {
      console.log(response);
      console.log("run");
      return response;
    })
    .catch(function (error) {
      return error;
    });

export default getReqs;
