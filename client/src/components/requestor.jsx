import { Col, Row, Button, Form } from "react-bootstrap";
import axios from "axios";
import Auth from "../util/auth";
import { useState } from "react";

function RequestorList(props) {
  const [resolved,setResolved] = useState(false)
  console.log(props)
  const resolve = (event, issueID) => {
    console.log("IssueId",issueID,"value",event.target.value)
    // if(event.target.value){
    //  
    // }
    // else{
    //   event.target.value = true
    // }
    // if(document.getElementById(`custom-switch-${issue.id}`).value === "off") {
      if(event.target.value){
      axios.put(`/api/issue/${userId}/${issueID}`, {
        resolve:false,
     
        headers: {
          Authorization: `Bearer ${Auth.getToken()}`,
        },
    
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return error
      })
    } else {
      axios.put(`/api/issue/${userId}/${issueID}`, {
        resolved: true,
        headers: {
          Authorization: `Bearer ${Auth.getToken()}`,
      }
      }).then(function (response) {
        return response
      })
      .catch(function (error) {
        return error
      })
  }}
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
                          id={`custom-switch-${issue._id}`}
                          label="Check this switch"
                          value= {issue.resolved}
                          onClick={(event) => resolve(event,issue._id)}
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
;
}
export default RequestorList;

//{issue.resolved.toString()
