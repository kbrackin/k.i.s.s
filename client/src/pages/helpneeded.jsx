import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style.css";

function Endpage() {
  return (
    <div className="endpage">
      <h1>Thank you for using our AI service!</h1>
      <h2>
        Someone will contact you soon by Email, please make sure to check your
        junk!
      </h2>

      <Row>
        <Col className="text-center">
          <a href="/aihelp">
            <Button variant="success">Ask another Question?</Button>
          </a>
        </Col>

        <Col className="text-center">
          <a href="/logout">
            <Button variant="success">Logout</Button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Endpage;
