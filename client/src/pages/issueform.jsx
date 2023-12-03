import React, { useState, useEffect } from "react";

import "../style.css";

import toGPT from "../api/toGPT";
import { getAdapter } from "axios";

export default function Issue() {
  const [issueVal, setIssueVal] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("val added");
  }, [issueVal]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const IssueGPT = {
      message: `Computer support for end user, answer in under 265 characters, question:${issueVal}`,
    };
    console.log(IssueGPT);

    const gptAnswer = async () => {
      let gptRes = {};

      gptRes = await toGPT(IssueGPT);

      setResult(gptRes.data.response);

      // console.log(gptRes.data.response);
    };

    gptAnswer();
  };

  return (
    <div className="contact">
      <h1>Lets Start!</h1>
      <p>Please complete this form to get help from our AI helpdesk...</p>

      <form className="contactme" onSubmit={handleSubmit}>
        <label>Descirbe the support issue you are having:</label>
        <textarea
          rows="10"
          cols="50"
          id="issue"
          value={issueVal}
          title="Can not be blank, please enter issue"
          required
          onChange={(e) => setIssueVal(e.target.value)}
        ></textarea>

        <br></br>
        <button type="submit">Submit</button>

        <p>{result}</p>
      </form>
    </div>
  );
}
