import { Col, Row, Button, Form } from "react-bootstrap";

function RequestorList(props) {
  return (
    <>
      <p>
        <strong>User:</strong> {props.name}
      </p>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
      <p>
        <Row>
          <Col className="col-lg-1">
            <tr>
              <strong>Issues:</strong>
            </tr>
          </Col>
          <table>
            <tr>
              <Col>
                {props.issues.map((issue) => (
                  <div key={issue.id}>
                    <td id="tablecontent">Issue: {issue.issues}</td>
                    <td id="tablecontent">
                      {" "}
                      Is Resolved:{" "}
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          label="Check this switch"
                        />
                      </Form>
                    </td>
                  </div>
                ))}
              </Col>
            </tr>
          </table>
          <Col>
          <a href={`mailto:${props.email}`}>
            <Button>Contact User</Button>
            </a>
          </Col>
        </Row>
      </p>
    </>
  );
}
export default RequestorList;

//{issue.resolved.toString()
