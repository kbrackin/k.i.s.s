import { Col, Row, Button } from "react-bootstrap";

function RequestorList(props) {
  return (
    <>
      <p>User: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>
        <Row>
          <Col>Issues:</Col>

          <Col>
            {props.issues.map((issue) => (
              <p key={issue.id}>Issue: {issue.issues}</p>
            ))}
          </Col>
          <Col>
            <Button>Contact User</Button>
          </Col>
        </Row>
      </p>
    </>
  );
}
export default RequestorList;
