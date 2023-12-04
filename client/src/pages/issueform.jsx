import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import RespForm from "../components/gptResult";

import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import toGPT from "../api/toGPT";
import CardBody from "react-bootstrap/esm/CardBody";

export default function Issue() {
  const [issueVal, setIssueVal] = useState("");
  const [result, setResult] = useState("");

  // useEffect(() => {
  //   // document.getElementById(answer).style.visibility = "visable";
  // }, [result]);

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

      console.log(gptRes.data.response);
    };

    gptAnswer();
  };

  return (
    <div className="aihelper">
      {/* TOP */}
      <Container>
        <Col>
          <Row>
            <h1>Let's Start!</h1>
            <h2>
              Please complete this form to get help from our AI helpdesk...
            </h2>
          </Row>
        </Col>
      </Container>

      <Container>
        <Col>
          <Form className="contactme" onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>
                  Descirbe the support issue you are having:
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="issue"
                  value={issueVal}
                  title="Can not be blank, please enter issue"
                  required
                  onChange={(e) => setIssueVal(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
      </Container>

      <Container id="answer">
        <div>
          <h2>Our AI suggests the following:</h2>
          <Card body>
            <RespForm responce={result} />
          </Card>
          <h2>Was this helpful?</h2>

          <Row>
            <Col className="text-center">
              <Button variant="success">Yes</Button>
            </Col>

            <Col className="text-center">
              <Button variant="success">No</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
