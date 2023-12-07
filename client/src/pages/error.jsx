import React from "react";
import "../style.css";

function Errorpage() {
  return (
    <div className="endpage">
      <h1>Sorry, this page does not exist!</h1>
      <h2>Error 404</h2>
      <h2>Ask our AI why if you are interested!</h2>
      <a href="/">
        <button>Home</button>
      </a>
    </div>
  );
}

export default Errorpage;
