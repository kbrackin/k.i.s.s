import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

function TechDash() {
  return (
    <div>
      <Row>
        <Col>
          <h2>Requester</h2>
        </Col>

        <Col>
          <h2>Requests</h2>
        </Col>
      </Row>
    </div>
  );
}

export default TechDash;
