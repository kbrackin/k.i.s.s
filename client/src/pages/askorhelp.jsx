import React, { useState, useEffect } from "react";
import { Row, Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function askOrHelp() {
  return (
    <div>
      <div>
        <Row>
          <div className="">
            <h1>Welcome to our support site!</h1>
            <p>
              Our AI support bot is waiting to help you. If you need further
              assistance, your information will be shared with others who are
              willing to lend a human hand.
            </p>
          </div>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="aiman.webp" />
              <Card.Body>
                <Card.Title>AI Support</Card.Title>
                <Card.Text>
                  Get quick help and request further support if needed from our
                  AI. Helpdesk
                </Card.Text>
                <Link to="/aihelp">
                  <Button variant="primary">AI Helpdesk</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/theITcrowd.jpg" />
              <Card.Body>
                <Card.Title>Help Someone</Card.Title>
                <Card.Text>
                  Are you a talented IT Pro? Are you willing to help someone
                  with the issue? Click here to access our support board.
                </Card.Text>
                <Link to="/techdash">
                  <Button variant="primary">Give Suppport</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default askOrHelp;
