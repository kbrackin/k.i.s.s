import React, { useState, useEffect } from "react";
import Requestor from "../components/requestor";
import axios from "axios";

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint
    axios
      .get("/api/issue/users/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <Requestor
            name={item.username}
            email={item.email}
            key={item._id}
            issues={item.issues}
            resolved={item.issues.resolved}
          />

          // <li key={item._id}>Name: {item.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
