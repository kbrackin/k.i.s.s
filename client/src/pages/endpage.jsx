import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Auth from "../util/auth";

function Endpage() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(Auth.loggedIn());

    if (!loggedIn) {
      const asyncCallback = async () => {
        const data = await axios.get("/");
      };

      asyncCallback();
    }
  }, []);

  return (
    <div className="endpage">
      <h1>Thank you for using our AI service!</h1>
      <h2>We hope you found the help you needed.</h2>
      <h2>Come back soon!</h2>
    </div>
  );
}

export default Endpage;
