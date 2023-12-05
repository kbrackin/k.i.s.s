import { Outlet } from "react-router-dom";
import "../style.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function homePage() {
  return (
    <>
      <header className="headertop">
        <h1>K.I.S.S. Support System</h1>
      </header>

      <Outlet />
    </>
  );
}

export default homePage;
