import { Col, Row, Button, Form } from "react-bootstrap";
import axios from "axios";
import Auth from "../util/auth";
import React, { useState } from "react";



function RequestorList(props) {
  
  const [issueResolved, setIssueResolved] = useState({ resolved: false })
  
  const handleChange = (e, issueID, key) => {
    const { checked } = e.target
    const resolved = issueResolved
    console.log("IssueId", issueID, "value",checked)

    if (checked) {
      setIssueResolved({
        resolved: true
      });
      axios.put(`/api/issue/${key}/${issueID}`, {
        resolved: true,

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
      axios.put(`/api/issue/${key}/${issueID}`, {
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
    }
  }

  return (
    <>
      <p>
        <strong>User:</strong> {props.name}
      </p>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
      <div>
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
                  <div key={issue._id}>
                    <td id="tablecontent-left">Issue: {issue.issues}</td>
                    <td id="tablecontent">
                      {" "}
                      Is Resolved:{" "}
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id={issue._id}
                        label=""
                        value={issue.issues.resolved}
                        onChange={handleChange}
                      />

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
      </div>
    </>
  );
  ;
}
export default RequestorList;

//{issue.resolved.toString()
//(e) => resolve(e, issue._id)