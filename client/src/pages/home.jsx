import { Outlet } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "../style.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Auth from "../util/auth"





function homePage() {
  return (
    <>
      <header className="headertop">
        <h1>K.I.S.S. Support System</h1>
      </header>
      <header>
      <Button variant="primary" size="lg" href="helporask">Home</Button>
      <Button variant="primary" size="sm" onClick={Auth.logout}>Logout</Button>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default homePage;
