import React, { useState, useEffect, Map } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import Requestor from "../components/requestor";
import getReqs from "../api/requestor";

const data = [];

function TechDash() {
  const [requestor, setRequestor] = useState("");

  const click = () => {
    console.log("click");

    const data = getReqs();
    setRequestor(data);
    console.log(data);
  };

  return (
    <div>
      {/* <Row>
        <button onClick={click}>load</button>
        {requestor ? (

   {data.map((data, i) => (
    <Col>
      <Requestor User={data.data.username} />
    </Col>
  ))}

        ) : ("") }
      

        <Col>
          <h2>Requests</h2>
        </Col>
      </Row> */}
    </div>
  );
}

export default TechDash;
