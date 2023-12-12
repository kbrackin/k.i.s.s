import React, { useState, useEffect } from "react";
import Requestor from "../components/requestor";
import axios from "axios";
import Auth from "../util/auth";

const UserDash = () => {
  const [userD, setuserD] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint

    const udata = Auth.getProfile();

    // toIssues(udata.data._id, question);

    axios
      .get(`/api/issue/${udata.data._id}`, {
        // headers: { Authorization: `Bearer ${Auth.getToken()}` },
      })
      .then((response) => {
        setuserD(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {userD.map((item) => (
          <Requestor
            name={item.username}
            email={item.email}
            key={item._id}
            issues={item.issues}
            resolved={item.issues.resolved}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserDash;
