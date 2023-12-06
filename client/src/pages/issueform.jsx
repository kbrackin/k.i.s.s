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
  const [aiBox, setAiBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const IssueGPT = {
      message: `Computer support for end user, answer in under 265 characters, question:${issueVal}`,
    };
    console.log(IssueGPT);

    setLoading(true);
    const gptAnswer = async () => {
      // let gptRes = {};

      const gptRes = await toGPT(IssueGPT);

      if (!gptRes.ok) {
        console.log("errer");
      }

      setResult(gptRes.data.response);
      setLoading(false);
      setAiBox(true);

      console.log(gptRes.data.response);
      setQuestion(issueVal);
      setIssueVal("");
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

      {aiBox ? (
        <Container>
          <div>
            <h2>Our AI suggests the following:</h2>
            <Card body>
              <RespForm responce={result} question={question} />
            </Card>
            <h2>Was this helpful?</h2>

            <Row>
              <Col className="text-center">
                <a href="/endpage">
                <Button variant="success">Yes</Button>
                </a>
              </Col>

              <Col className="text-center">
                <a>
                  <Button variant="success">No</Button>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      ) : (
        ""
      )}
      {loading ? (
        <Container className="text-center">"Content is loading"</Container>
      ) : (
        ""
      )}
    </div>
  );
}
