import { Col, Row, Button } from "react-bootstrap";

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
                      Is Resolved: {issue.resolved.toString()}
                    </td>
                  </div>
                ))}
              </Col>
            </tr>
          </table>
          <Col>
            <Button>Contact User</Button>
          </Col>
        </Row>
      </p>
    </>
  );
}
export default RequestorList;
