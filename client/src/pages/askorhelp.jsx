import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function askOrHelp() {
  return (
    <div className="">
      <h1>Thank you for using our AI service!</h1>
      <h2>We hope you found the help you needed.</h2>
      <h2>Come back soon!</h2>
      <a href="/">
        <button>Home</button>
      </a>
    </div>
  );
}

export default askOrHelp;
